import {Link} from 'react-router';

const categories = [
  ['Wall art', 'Carved stories for your walls', '/collections/wall-art'],
  ['Sacred objects', 'For your daily ritual', '/collections/sacred-objects'],
  ['Meaningful gifting', 'Pieces made to be kept', '/collections/gifting'],
  ['Festival editions', 'Limited seasonal collections', '/collections/festival-editions'],
] as const;

export function CategoryTiles() {
  return (
    <section className="category-tiles" aria-label="Shop by category">
      {categories.map(([title, description, to], index) => (
        <Link className={`category-tile tile-${index + 1}`} key={to} to={to}>
          <span className="category-tile-symbol" aria-hidden>{['✦', '◒', '✺', '◉'][index]}</span>
          <div><h2>{title}</h2><p>{description}</p><span>Discover →</span></div>
        </Link>
      ))}
    </section>
  );
}
