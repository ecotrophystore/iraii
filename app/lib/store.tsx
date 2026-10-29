import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { getProduct, productUnitPrice, SHIP_FREE } from './catalog';

/* ---------------- Cart ----------------
 * MVP: cart lives in the browser (localStorage). Once the Shopify store is wired up,
 * this becomes Hydrogen's server cart (createCartHandler) without changing the UI API. */

export type CartLine = { id: string; finish: string; size: string; qty: number };

type CartApi = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (id: string, finish: string, size: string, qty?: number) => void;
  change: (index: number, delta: number) => void;
  remove: (index: number) => void;
};

const CartContext = createContext<CartApi | null>(null);
const CART_KEY = 'irai-cart';

function readCart(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    const parsed = raw ? (JSON.parse(raw) as CartLine[]) : [];
    return parsed.filter((l) => getProduct(l.id));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const hydrated = useRef(false);

  // Read storage after mount so server and client markup match.
  useEffect(() => {
    setLines(readCart());
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(lines));
    } catch {
      /* storage can be blocked; the cart still works for this visit */
    }
  }, [lines]);

  const add = useCallback((id: string, finish: string, size: string, qty = 1) => {
    setLines((prev) => {
      const hit = prev.find((l) => l.id === id && l.finish === finish && l.size === size);
      if (hit) return prev.map((l) => (l === hit ? { ...l, qty: Math.min(10, l.qty + qty) } : l));
      return [...prev, { id, finish, size, qty }];
    });
  }, []);

  const change = useCallback((index: number, delta: number) => {
    setLines((prev) =>
      prev
        .map((l, i) => (i === index ? { ...l, qty: Math.min(10, Math.max(1, l.qty + delta)) } : l))
    );
  }, []);

  const remove = useCallback((index: number) => {
    setLines((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const value = useMemo<CartApi>(() => {
    const priced = lines.map((l) => {
      const p = getProduct(l.id);
      const sizeIdx = p ? p.sizes.findIndex((s) => s[0] === l.size) : -1;
      return p ? productUnitPrice(p, sizeIdx < 0 ? null : sizeIdx) * l.qty : 0;
    });
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: priced.reduce((a, b) => a + b, 0),
      add,
      change,
      remove,
    };
  }, [lines, add, change, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartApi {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}

export const shippingLeft = (subtotal: number) => Math.max(0, SHIP_FREE - subtotal);

/* ---------------- UI overlays ---------------- */

type Overlay = 'cart' | 'filters' | 'menu' | 'search' | 'mega';

type UIApi = {
  open: Overlay | null;
  setOpen: (o: Overlay | null) => void;
  modal: { title: string; body: ReactNode } | null;
  openModal: (title: string, body: ReactNode) => void;
  closeModal: () => void;
  toastMsg: string;
  toast: (msg: string) => void;
};

const UIContext = createContext<UIApi | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<Overlay | null>(null);
  const [modal, setModal] = useState<UIApi['modal']>(null);
  const [toastMsg, setToastMsg] = useState('');
  const toastTimer = useRef<number | undefined>(undefined);

  const toast = useCallback((msg: string) => {
    setToastMsg(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMsg(''), 2600);
  }, []);

  const openModal = useCallback((title: string, body: ReactNode) => {
    setOpen(null);
    setModal({ title, body });
  }, []);
  const closeModal = useCallback(() => setModal(null), []);

  // Escape closes whatever is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setModal(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const value = useMemo<UIApi>(
    () => ({ open, setOpen, modal, openModal, closeModal, toastMsg, toast }),
    [open, modal, openModal, closeModal, toastMsg, toast]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI(): UIApi {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used inside UIProvider');
  return ctx;
}
