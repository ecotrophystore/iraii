import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowIcon, BagIcon, CloseIcon } from './Icons';
import { Obj } from './Obj';
import { money, objColours, type Product } from '~/lib/catalog';
import { useCart, useUI } from '~/lib/store';

export function Badges({ badges }: { badges: string[] }) {
  if (!badges.length) return null;
  return (
    <div className="badges">
      {badges.map((b) => (
        <span key={b} className={`badge ${b === 'Sale' ? 'badge--sale' : ''}`}>
          {b}
        </span>
      ))}
    </div>
  );
}

export function Price({ p }: { p: Product }) {
  return p.was ? (
    <span className="price">
      <span className="now">{money(p.price)}</span>
      <s>{money(p.was)}</s>
    </span>
  ) : (
    <span className="price">{money(p.price)}</span>
  );
}

/** Product card: finish swatches swap the artwork colour; Quick add opens a size picker. */
export function ProductCard({ p }: { p: Product }) {
  const [fi, setFi] = useState(0);
  const [quickOpen, setQuickOpen] = useState(false);
  const cart = useCart();
  const ui = useUI();
  const shown = p.finishes.slice(0, 5);
  const more = p.finishes.length - shown.length;
  const { o1, o2 } = objColours(p, fi);

  const quickAdd = () => {
    if (p.sizes.length === 1 && p.sizes[0][3]) {
      cart.add(p.id, p.finishes[fi][0], p.sizes[0][0]);
      ui.toast(`${p.name} added to cart`);
    } else {
      setQuickOpen(true);
    }
  };

  const pickSize = (label: string) => {
    cart.add(p.id, p.finishes[fi][0], label);
    setQuickOpen(false);
    ui.toast(`${p.name} added to cart`);
  };

  return (
    <article className="card">
      <Badges badges={p.badges} />
      <Link className="card__media" to={`/products/${p.id}`} aria-label={p.name}>
        <Obj shape={p.shape} o1={o1} o2={o2} />
      </Link>
      {quickOpen && (
        <div className="qpanel">
          <div className="qpanel__head">
            <span>Select size</span>
            <button onClick={() => setQuickOpen(false)} aria-label="Close size picker">
              <CloseIcon size={10} />
            </button>
          </div>
          <div className="qpanel__sizes">
            {p.sizes.map((s) => (
              <button key={s[0]} className="size" style={{ height: 36, padding: '0 12px' }} disabled={!s[3]} onClick={() => pickSize(s[0])}>
                {s[0]}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="card__body">
        <Link className="card__name" to={`/products/${p.id}`}>
          {p.name}
        </Link>
        <div className="card__finish">{p.finishes[fi][0]}</div>
        <div className="card__row">
          <Price p={p} />
          <button className="quick" onClick={quickAdd} aria-label={`Quick add ${p.name}`}>
            <BagIcon />
            <span>Quick add</span>
          </button>
        </div>
        <div className="swatches">
          {shown.map((f, i) => (
            <button
              key={f[0]}
              className="sw"
              style={{ ['--c' as string]: f[1] }}
              aria-label={f[0]}
              aria-current={i === fi}
              onClick={() => setFi(i)}
            />
          ))}
          {more > 0 && (
            <Link className="sw-more" to={`/products/${p.id}`}>
              +{more}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

/** A section with a heading row and a horizontal rail of cards, with prev/next buttons. */
export function Rail({ head, label, children }: { head: ReactNode; label: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const t = window.setTimeout(sync, 300);
    return () => window.clearTimeout(t);
  }, [children, sync]);

  const step = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const w = card ? card.getBoundingClientRect().width + 10 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  return (
    <section className="sec" aria-label={label}>
      <div className="sec__head">
        {head}
        <div className="arrows">
          <button className="circle-btn" onClick={() => step(-1)} disabled={atStart} aria-label={`Previous ${label}`}>
            <ArrowIcon dir={-1} />
          </button>
          <button className="circle-btn" onClick={() => step(1)} disabled={atEnd} aria-label={`Next ${label}`}>
            <ArrowIcon dir={1} />
          </button>
        </div>
      </div>
      <div className="rail" ref={ref} onScroll={sync}>
        {children}
      </div>
    </section>
  );
}
