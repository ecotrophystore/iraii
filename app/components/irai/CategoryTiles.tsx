import {Link} from 'react-router';
import wallArtImage from '~/assets/category-wall-art-v1.png';

const categories = [
  ['Wall art', 'Carved stories for considered spaces', '/collections/wall-art', 'image'],
  ['Sacred objects', 'Small rituals, held close', '/collections/sacred-objects', 'clay'],
  ['Meaningful gifting', 'Pieces chosen to become keepsakes', '/collections/gifting', 'gold'],
  ['Festival editions', 'Limited objects for a season of gathering', '/collections/festival-editions', 'sage'],
] as const;

export function CategoryTiles() {
  return (
    <section className="category-tiles" aria-labelledby="collection-heading">
      <div className="section-intro">
        <p className="eyebrow">SHOP IRAI</p>
        <h2 id="collection-heading">Begin with the feeling you want to bring home.</h2>
        <p>Objects with a quiet point of view—made for rooms, rituals, and the people you gather with.</p>
      </div>
      <div className="category-grid">
      {categories.map(([title, description, to, treatment], index) => (
        <Link className={`category-tile category-tile--${treatment} tile-${index + 1}`} key={to} to={to}>
          {treatment === 'image' && <img src={wallArtImage} alt="Botanical carved wooden wall art" />}
          <div className="category-copy"><span className="category-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="text-link">Explore <b aria-hidden="true">→</b></span></div>
        </Link>
      ))}
      </div>
    </section>
  );
}
