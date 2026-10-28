import type {ReactNode} from 'react';

export function ProductDetail({gallery, children}: {gallery: ReactNode; children: ReactNode}) {
  return <div className="irai-product-detail">
    <section className="product-gallery" aria-label="Product gallery">{gallery}</section>
    <section className="product-purchase-panel">{children}<p className="product-assurance">Complimentary gift note · Secure checkout · Made with care</p></section>
    <section className="product-accordions" aria-label="Product details">
      <details open><summary>About this piece</summary><p>The story, symbolism, and making notes for this piece are supplied from the IRAI product record.</p></details>
      <details><summary>Material & craftsmanship</summary><p>Material, finish, carving, and care information are provided with each product.</p></details>
      <details><summary>Gifting & delivery</summary><p>Choose a gift note at checkout. Delivery availability and timings are confirmed for your location.</p></details>
    </section>
  </div>;
}
