import {Link} from 'react-router';

const columns = [
  {
    heading: 'Discover',
    links: [
      ['Wall Art', '/collections/wall-art'],
      ['Sacred Objects', '/collections/sacred-objects'],
      ['Meaningful Gifting', '/collections/gifting'],
    ],
  },
  {
    heading: 'Collections',
    links: [
      ['Murugan', '/collections/murugan'],
      ['Festival Editions', '/collections/festival-editions'],
      ['New Arrivals', '/collections/new-arrivals'],
    ],
  },
];

export function MegaNavigation() {
  return (
    <div className="mega-navigation" id="shop-navigation">
      {columns.map((column) => (
        <section key={column.heading}>
          <p>{column.heading}</p>
          {column.links.map(([label, to]) => (
            <Link key={to} to={to} prefetch="intent">
              {label}
            </Link>
          ))}
        </section>
      ))}
      <section className="mega-navigation-feature">
        <p>IRAI EDIT</p>
        <strong>Objects of devotion, made for the home.</strong>
        <Link to="/pages/our-story">Our story →</Link>
      </section>
    </div>
  );
}
