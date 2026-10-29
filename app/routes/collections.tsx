import { Link } from 'react-router';
import { COLLECTIONS, collectionCount } from '~/lib/catalog';

export function meta() {
  return [{ title: 'All collections · IRAI' }];
}

export default function Collections() {
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb"><Link to="/">Home</Link> / Collections</nav>
      <section className="cat-hero" style={{ ['--c' as string]: '#4a3a30' }}>
        <div className="cat-hero__copy">
          <h1>Collections</h1>
          <p>Carved wood, cast brass and glazed clay, grouped by where they belong.</p>
        </div>
      </section>
      <div className="shortcuts" style={{ marginTop: 40 }}>
        {Object.values(COLLECTIONS).map((c) => (
          <Link key={c.handle} className="btn btn--outline" to={`/collections/${c.handle}`}>
            {c.title}
            <span aria-hidden="true">{c.handle === 'all' ? '' : ` (${collectionCount(c.handle)})`}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
