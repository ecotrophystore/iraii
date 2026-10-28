import type {ReactNode} from 'react';

export function CollectionTemplate({title, description, children}: {title: string; description?: string | null; children: ReactNode}) {
  return <div className="irai-collection"><header className="collection-hero"><p className="eyebrow">IRAI COLLECTION</p><h1>{title}</h1>{description ? <p>{description}</p> : null}</header><div className="collection-toolbar"><button type="button">Filters</button><span>Made with intention</span><label>Sort <select aria-label="Sort collection"><option>Featured</option><option>Newest</option><option>Price: low to high</option><option>Price: high to low</option></select></label></div>{children}</div>;
}
