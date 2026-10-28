import {Link} from 'react-router';
import {useAside} from '~/components/Aside';

const links = [
  ['Shop all', '/collections'],
  ['Wall art', '/collections/wall-art'],
  ['Sacred objects', '/collections/sacred-objects'],
  ['Festival editions', '/collections/festival-editions'],
  ['Gifting', '/collections/gifting'],
  ['Our story', '/pages/our-story'],
] as const;

export function MobileNavigation() {
  const {close} = useAside();
  return (
    <nav className="mobile-navigation" aria-label="Mobile navigation">
      {links.map(([label, to]) => (
        <Link key={to} onClick={close} to={to} prefetch="intent">
          {label}
          <span aria-hidden>→</span>
        </Link>
      ))}
    </nav>
  );
}
