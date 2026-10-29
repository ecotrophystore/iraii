import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { ANNOUNCEMENTS, POLICIES } from '~/lib/catalog';
import { useCart, useUI } from '~/lib/store';
import { ArrowIcon, BagIcon, CloseIcon, MenuIcon, SearchIcon } from './Icons';

/* ---------- Announcement bar: auto-advances every 5s, arrows step by hand ---------- */
export function AnnouncementBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % ANNOUNCEMENTS.length), 5000);
    return () => window.clearInterval(t);
  }, []);
  const step = (d: number) => setI((n) => (n + d + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);

  return (
    <div className="announce" role="region" aria-roledescription="carousel" aria-label="Store announcements">
      <button className="announce__arrow announce__arrow--prev" onClick={() => step(-1)} aria-label="Previous announcement">
        <ArrowIcon dir={-1} size={8} />
      </button>
      <div>
        {ANNOUNCEMENTS.map((m, k) => (
          <div key={m} className={`announce__msg ${k === i ? 'is-active' : ''}`} aria-hidden={k !== i}>
            {m}
          </div>
        ))}
      </div>
      <button className="announce__arrow announce__arrow--next" onClick={() => step(1)} aria-label="Next announcement">
        <ArrowIcon dir={1} size={8} />
      </button>
    </div>
  );
}

/* ---------- Header: floating pill, mega menu on desktop, drawer on mobile ---------- */
export function SiteHeader() {
  const ui = useUI();
  const cart = useCart();
  const megaOpen = ui.open === 'mega';

  return (
    <>
      <header className="header">
        <button className="icon-btn menu-btn" onClick={() => ui.setOpen(ui.open === 'menu' ? null : 'menu')} aria-label="Open menu" aria-expanded={ui.open === 'menu'}>
          <MenuIcon />
        </button>
        <Link className="brand" to="/" aria-label="IRAI home">
          <b>IRAI</b>
          <span>Devotional art</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link to="/collections/new">New Arrivals</Link>
          <Link to="/collections/all">Shop All</Link>
          <button aria-expanded={megaOpen} aria-controls="mega" onClick={() => ui.setOpen(megaOpen ? null : 'mega')}>
            Collections
          </button>
          <Link to="/collections/festival">Festival</Link>
        </nav>
        <div className="icons">
          <button className="icon-btn" onClick={() => ui.setOpen('search')} aria-label="Search">
            <SearchIcon />
          </button>
          <button className="icon-btn" onClick={() => ui.setOpen('cart')} aria-label={`View cart, ${cart.count} items`}>
            <BagIcon size={18} />
            {cart.count > 0 && <span className="count-dot">{cart.count}</span>}
          </button>
        </div>
      </header>

      <div className={`mega ${megaOpen ? 'is-open' : ''}`} id="mega" role="region" aria-label="Collections menu">
        <div className="mega__tab">Collections</div>
        <div className="mega__cols">
          <div className="mega__featured">
            <ul>
              <li><Link to="/collections/new" onClick={() => ui.setOpen(null)}>New Arrivals</Link></li>
              <li><Link to="/collections/all" onClick={() => ui.setOpen(null)}>Bestsellers</Link></li>
              <li><Link to="/collections/festival" onClick={() => ui.setOpen(null)}>Festival Edit</Link></li>
            </ul>
          </div>
          <div>
            <h4>Wall Art</h4>
            <ul>
              <li><Link to="/collections/wall-art" onClick={() => ui.setOpen(null)}>Shop All Wall Art</Link></li>
              <li><Link to="/collections/murugan" onClick={() => ui.setOpen(null)}>Murugan</Link></li>
              <li><Link to="/collections/wall-art" onClick={() => ui.setOpen(null)}>Carved Panels</Link></li>
            </ul>
          </div>
          <div>
            <h4>Sacred Objects</h4>
            <ul>
              <li><Link to="/collections/sacred-objects" onClick={() => ui.setOpen(null)}>Shop All Objects</Link></li>
              <li><Link to="/collections/sacred-objects" onClick={() => ui.setOpen(null)}>Lamps &amp; Diyas</Link></li>
              <li><Link to="/collections/sacred-objects" onClick={() => ui.setOpen(null)}>Bells &amp; Vessels</Link></li>
            </ul>
          </div>
          <div>
            <h4>Customer Favourites</h4>
            <ul>
              <li><Link to="/products/murugan-vel-panel" onClick={() => ui.setOpen(null)}>Vel Wall Panel</Link></li>
              <li><Link to="/products/ganesha-diya" onClick={() => ui.setOpen(null)}>Ganesha Diya</Link></li>
              <li><Link to="/products/gift-set" onClick={() => ui.setOpen(null)}>Devotion Gift Set</Link></li>
            </ul>
          </div>
          <Link className="mega__card" to="/collections/gifting" onClick={() => ui.setOpen(null)}>
            <span className="mono" style={{ fontSize: 12 }}>Gifting</span>
            <strong style={{ font: '400 20px/26px var(--f-body)' }}>Gifts that carry meaning</strong>
            <p>Each one ships with a card explaining the form.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

/* ---------- Mobile menu drawer with two expandable groups ---------- */
export function MobileMenu() {
  const ui = useUI();
  const [wall, setWall] = useState(false);
  const [obj, setObj] = useState(false);
  const close = () => ui.setOpen(null);
  const open = ui.open === 'menu';

  return (
    <aside className={`drawer drawer--left ${open ? 'is-open' : ''}`} aria-label="Menu" role="dialog" aria-modal="true" aria-hidden={!open}>
      <div className="drawer__head">
        <Link className="brand" to="/" onClick={close}><b>IRAI</b></Link>
        <button className="circle-btn" onClick={close} aria-label="Close menu"><CloseIcon /></button>
      </div>
      <div className="drawer__body">
        <ul className="mobile-nav">
          <li><Link to="/collections/new" onClick={close}>New Arrivals <span aria-hidden="true">&rsaquo;</span></Link></li>
          <li><Link to="/collections/all" onClick={close}>Shop All <span aria-hidden="true">&rsaquo;</span></Link></li>
          <li>
            <button aria-expanded={wall} onClick={() => setWall(!wall)}>Wall Art <span aria-hidden="true">{wall ? '−' : '+'}</span></button>
            {wall && (
              <div className="mobile-sub">
                <Link to="/collections/wall-art" onClick={close}>Shop All Wall Art</Link>
                <Link to="/collections/murugan" onClick={close}>Murugan</Link>
              </div>
            )}
          </li>
          <li>
            <button aria-expanded={obj} onClick={() => setObj(!obj)}>Sacred Objects <span aria-hidden="true">{obj ? '−' : '+'}</span></button>
            {obj && (
              <div className="mobile-sub">
                <Link to="/collections/sacred-objects" onClick={close}>Shop All Objects</Link>
                <Link to="/collections/gifting" onClick={close}>Gifting</Link>
              </div>
            )}
          </li>
          <li><Link to="/collections/festival" onClick={close}>Festival Edit <span aria-hidden="true">&rsaquo;</span></Link></li>
          <li><Link to="/pages/our-story" onClick={close}>Our Story <span aria-hidden="true">&rsaquo;</span></Link></li>
          <li><Link to="/pages/help" onClick={close}>Help <span aria-hidden="true">&rsaquo;</span></Link></li>
        </ul>
      </div>
    </aside>
  );
}

/* ---------- Footer ---------- */
export function SiteFooter() {
  const ui = useUI();
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErr(true);
      setMsg('Enter a valid email address.');
      return;
    }
    setErr(false);
    setMsg('Thank you. Festival alerts will reach you by email.');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <h2>Festival alerts by email</h2>
            <form className="news" onSubmit={submit} noValidate>
              <label className="sr-only" htmlFor="news-email">Email address</label>
              <input id="news-email" type="email" placeholder="Email address" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={err} />
              <button className="btn btn--dark" type="submit">Sign up</button>
            </form>
            <div className="news-msg" role="status">{msg}</div>
            <div className="follow">
              <span className="mono" style={{ fontSize: 12, color: 'var(--ink)' }}>Follow</span>
              <span>Instagram</span><span>YouTube</span><span>Pinterest</span>
            </div>
          </div>
          <div>
            <h2>Help</h2>
            <ul>
              <li><span style={{ userSelect: 'all' }}>hello@irai.in</span></li>
              <li><Link to="/pages/help">FAQ &amp; Contact</Link></li>
              <li><Link to="/pages/help">Shipping &amp; Returns</Link></li>
              <li><Link to="/pages/help">Care &amp; Display</Link></li>
            </ul>
          </div>
          <div>
            <h2>Shop</h2>
            <ul>
              <li><Link to="/collections/wall-art">Wall Art</Link></li>
              <li><Link to="/collections/sacred-objects">Sacred Objects</Link></li>
              <li><Link to="/collections/murugan">Murugan</Link></li>
              <li><Link to="/collections/gifting">Gifting</Link></li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link to="/pages/our-story">Our Story</Link></li>
              <li><Link to="/pages/our-story">Craft &amp; Materials</Link></li>
              <li><Link to="/pages/help">Care Guide</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="locale">
            <label className="sr-only" htmlFor="locale">Country and currency</label>
            <select id="locale" defaultValue="in"><option value="in">India (INR ₹)</option></select>
          </div>
          <span>&copy; 2026 IRAI. All rights reserved.</span>
          <nav aria-label="Policies">
            {(['refund', 'privacy', 'terms', 'shipping'] as const).map((k) => (
              <button key={k} onClick={() => ui.openModal(policyTitle(k), <PolicyBody k={k} />)}>
                {policyTitle(k)}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function policyTitle(k: string) {
  return POLICIES[k][0];
}

function PolicyBody({ k }: { k: string }) {
  return <p>{POLICIES[k][1]}</p>;
}
