import {Link} from 'react-router';
import {useAside} from '~/components/Aside';
import {MegaNavigation} from './MegaNavigation';

export function IraiHeader() {
  const {open} = useAside();
  return (
    <header className="irai-header">
      <button
        className="header-icon mobile-only"
        aria-label="Open navigation"
        onClick={() => open('mobile')}
      >
        ☰
      </button>
      <Link className="brand-mark" to="/" aria-label="IRAI home">
        IRAI<span>.</span>
      </Link>
      <nav className="desktop-navigation" aria-label="Primary navigation">
        <Link to="/collections/new-arrivals">New arrivals</Link>
        <div className="shop-menu">
          <button aria-expanded="false" aria-controls="shop-navigation">
            Shop
          </button>
          <MegaNavigation />
        </div>
        <Link to="/collections/festival-editions">Festivals</Link>
        <Link to="/collections/gifting">Gifting</Link>
        <Link to="/pages/our-story">Our story</Link>
      </nav>
      <nav className="header-actions" aria-label="Store actions">
        <button className="header-icon" aria-label="Search" onClick={() => open('search')}>
          ⌕
        </button>
        <button className="header-icon" aria-label="Open cart" onClick={() => open('cart')}>
          Bag
        </button>
      </nav>
    </header>
  );
}
