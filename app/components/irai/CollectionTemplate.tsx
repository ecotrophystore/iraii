import type {ReactNode} from 'react';

export function CollectionTemplate({title, description, children}: {title: string; description?: string | null; children: ReactNode}) {
  return <div className="irai-collection">
    <header className="collection-hero">
      <p className="eyebrow">IRAI COLLECTION</p>
      <h1>{title}</h1>
      <p>{description || 'Thoughtfully made pieces for meaningful spaces and occasions.'}</p>
    </header>
    <div className="collection-toolbar" aria-label="Collection controls">
      <button type="button" aria-haspopup="dialog">Filter & refine <span aria-hidden="true">+</span></button>
      <span>Made in small, considered batches</span>
      <label>Sort by <select aria-label="Sort collection"><option>Featured</option><option>Newest</option><option>Price: low to high</option><option>Price: high to low</option></select></label>
    </div>
    {children}
  </div>;
}
