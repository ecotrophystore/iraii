import { useState, type FormEvent, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router';
import { CloseIcon, SearchIcon, ArrowIcon } from './Icons';
import { Obj } from './Obj';
import { money, objColours, PRODUCTS, productUnitPrice, getProduct, searchProducts, SHIP_FREE, type Product } from '~/lib/catalog';
import { shippingLeft, useCart, useUI } from '~/lib/store';

/* ---------- Free-shipping progress line (used in cart and the add-to-cart modal) ---------- */
export function ShippingProgress({ subtotal }: { subtotal: number }) {
  const left = shippingLeft(subtotal);
  const pct = Math.min(100, (subtotal / SHIP_FREE) * 100);
  return (
    <>
      <p className="ship-msg">{left ? `Spend ${money(left)} more for free shipping.` : 'Your order ships free.'}</p>
      <div className="ship-bar" aria-hidden="true"><i style={{ width: `${pct}%` }} /></div>
    </>
  );
}

/* ---------- Scrim behind any open panel; click to dismiss ---------- */
export function Scrim() {
  const ui = useUI();
  return <div className={`page-scrim ${ui.open ? 'is-on' : ''}`} onClick={() => ui.setOpen(null)} aria-hidden="true" />;
}

/* ---------- Cart drawer ---------- */
export function CartDrawer() {
  const cart = useCart();
  const ui = useUI();
  const open = ui.open === 'cart';
  const close = () => ui.setOpen(null);

  return (
    <aside className={`drawer drawer--right ${open ? 'is-open' : ''}`} aria-label="Cart" role="dialog" aria-modal="true" aria-hidden={!open}>
      <div className="drawer__head">
        <h2>Cart ({cart.count})</h2>
        <button className="circle-btn" onClick={close} aria-label="Close cart"><CloseIcon /></button>
      </div>
      <div className="drawer__body">
        <ShippingProgress subtotal={cart.subtotal} />
        {cart.lines.length === 0 ? (
          <>
            <p style={{ font: '400 18px/26px var(--f-body)', marginTop: 6 }}>Your cart is empty. Start with a piece for the shrine.</p>
            <div className="shortcuts">
              {[
                ['wall-art', 'Shop Wall Art'],
                ['sacred-objects', 'Shop Sacred Objects'],
                ['murugan', 'Shop Murugan'],
                ['gifting', 'Shop Gifting'],
                ['festival', 'Shop Festival Edit'],
              ].map(([h, t]) => (
                <Link key={h} className="btn btn--outline" to={`/collections/${h}`} onClick={close}>
                  {t}<span aria-hidden="true"><ArrowIcon /></span>
                </Link>
              ))}
            </div>
          </>
        ) : (
          cart.lines.map((l, i) => {
            const p = getProduct(l.id) as Product;
            const fi = Math.max(0, p.finishes.findIndex((f) => f[0] === l.finish));
            const si = p.sizes.findIndex((s) => s[0] === l.size);
            const { o1, o2 } = objColours(p, fi);
            return (
              <div className="line" key={`${l.id}-${l.finish}-${l.size}`}>
                <Link className="line__art" to={`/products/${p.id}`} onClick={close}>
                  <Obj shape={p.shape} o1={o1} o2={o2} />
                </Link>
                <div style={{ minWidth: 0 }}>
                  <h3>{p.name}</h3>
                  <div className="meta">{l.finish} · {l.size}</div>
                  <div className="stepper" role="group" aria-label={`Quantity for ${p.name}`}>
                    <button onClick={() => cart.change(i, -1)} aria-label="Decrease quantity">&minus;</button>
                    <span>{l.qty}</span>
                    <button onClick={() => cart.change(i, 1)} aria-label="Increase quantity">+</button>
                  </div>
                  <button className="rm" onClick={() => cart.remove(i)}>Remove</button>
                </div>
                <div className="price">{money(productUnitPrice(p, si < 0 ? null : si) * l.qty)}</div>
              </div>
            );
          })
        )}
      </div>
      {cart.lines.length > 0 && (
        <div className="drawer__foot">
          <div className="subtotal"><span>Subtotal</span><span>{money(cart.subtotal)}</span></div>
          <p className="foot-note">Taxes included. Shipping calculated at checkout.</p>
          <button className="btn btn--dark btn--lg btn--block" onClick={() => ui.toast('Checkout opens on the Shopify store once it is connected')}>
            Checkout
          </button>
        </div>
      )}
    </aside>
  );
}

/* ---------- Add-to-cart confirmation modal ---------- */
export function AddedBody({ id, finish, size, qty }: { id: string; finish: string; size: string; qty: number }) {
  const cart = useCart();
  const ui = useUI();
  const p = getProduct(id) as Product;
  const fi = Math.max(0, p.finishes.findIndex((f) => f[0] === finish));
  const si = p.sizes.findIndex((s) => s[0] === size);
  const { o1, o2 } = objColours(p, fi);
  const recs = PRODUCTS.filter((x) => x.id !== id && x.price < 2500).slice(0, 3);
  return (
    <>
      <div className="added">
        <div className="line__art"><Obj shape={p.shape} o1={o1} o2={o2} /></div>
        <div>
          <div className="card__name" style={{ display: 'block' }}>{p.name}</div>
          <div className="card__finish">{finish} · {size} · Qty {qty}</div>
          <div className="price" style={{ marginTop: 4 }}>{money(productUnitPrice(p, si < 0 ? null : si) * qty)}</div>
        </div>
      </div>
      <div style={{ marginTop: 18 }}><ShippingProgress subtotal={cart.subtotal} /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <button className="btn btn--outline btn--lg" onClick={() => ui.closeModal()}>Keep shopping</button>
        <button className="btn btn--dark btn--lg" onClick={() => { ui.closeModal(); ui.setOpen('cart'); }}>View cart</button>
      </div>
      <div className="label-sm" style={{ marginTop: 24 }}>You may also like</div>
      <div className="mini-grid">
        {recs.map((r) => {
          const c = objColours(r);
          return (
            <Link key={r.id} className="mini" to={`/products/${r.id}`} onClick={() => ui.closeModal()}>
              <div className="art"><Obj shape={r.shape} o1={c.o1} o2={c.o2} /></div>
              <span>{r.name}</span>
              <em>{money(r.price)}</em>
            </Link>
          );
        })}
      </div>
    </>
  );
}

/* ---------- Generic modal (policies, size guide, add-to-cart) ---------- */
export function Modal() {
  const ui = useUI();
  if (!ui.modal) return null;
  return (
    <div className="modal-wrap" onClick={ui.closeModal}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={ui.modal.title} onClick={(e) => e.stopPropagation()}>
        <button className="circle-btn x" onClick={ui.closeModal} aria-label="Close"><CloseIcon /></button>
        <h2>{ui.modal.title}</h2>
        <div>{ui.modal.body as ReactNode}</div>
      </div>
    </div>
  );
}

/* ---------- Search overlay (opened from the header) ---------- */
export function SearchOverlay() {
  const ui = useUI();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  if (ui.open !== 'search') return null;

  const results = searchProducts(q).slice(0, 6);
  const go = (term: string) => {
    ui.setOpen(null);
    navigate(`/search?q=${encodeURIComponent(term.trim())}`);
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (q.trim()) go(q);
  };

  return (
    <div className="so" role="dialog" aria-modal="true" aria-label="Search">
      <div className="so__panel">
        <form className="search-box" role="search" onSubmit={submit} style={{ width: '100%' }}>
          <label className="sr-only" htmlFor="so-input">Search</label>
          <input id="so-input" type="search" placeholder="Search wall art, deities, gifts" autoComplete="off" autoFocus value={q} onChange={(e) => setQ(e.target.value)} />
          <button className="icon-btn" type="submit" aria-label="Search"><SearchIcon /></button>
        </form>
        <div>
          {!q.trim() ? (
            <div className="so__popular">
              <span>Popular</span>
              {['Murugan', 'Brass', 'Panel', 'Gift', 'Festival'].map((t) => (
                <button key={t} onClick={() => go(t)}>{t}</button>
              ))}
            </div>
          ) : (
            <div className="so__results">
              {results.length ? (
                <>
                  {results.map((p) => (
                    <Link key={p.id} to={`/products/${p.id}`} onClick={() => ui.setOpen(null)}>
                      <span>{p.name}</span><span className="muted">{money(p.price)}</span>
                    </Link>
                  ))}
                  <button className="text-link" style={{ textAlign: 'left', padding: '12px' }} onClick={() => go(q)}>
                    See all results for “{q}”
                  </button>
                </>
              ) : (
                <p style={{ padding: '10px 12px', color: 'var(--ink-soft)' }}>No matches for “{q}”. Try Murugan, brass or gift.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Toast ---------- */
export function Toast() {
  const ui = useUI();
  return (
    <div className={`toast ${ui.toastMsg ? 'is-on' : ''}`} role="status" aria-live="polite">
      {ui.toastMsg}
    </div>
  );
}
