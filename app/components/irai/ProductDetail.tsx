import type {ReactNode} from 'react';

export function ProductDetail({gallery, children}: {gallery: ReactNode; children: ReactNode}) {
  return <div className="irai-product-detail"><section className="product-gallery" aria-label="Product gallery">{gallery}</section><section className="product-purchase-panel">{children}</section><section className="product-accordions" aria-label="Product details"><details open><summary>Why this piece</summary><p>Product-specific devotional meaning will be supplied by Shopify metafields.</p></details><details><summary>Materials & craftsmanship</summary><p>Wood species, finish, carving, and making notes will be supplied by Shopify metafields.</p></details><details><summary>Care & display</summary><p>Care instructions will be supplied by Shopify metafields.</p></details></section></div>;
}
