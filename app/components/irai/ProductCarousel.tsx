import {IraiProductCard, type IraiProductCardData} from './ProductCard';

export function ProductCarousel({products}: {products: IraiProductCardData[]}) {
  if (!products.length) return null;
  return (
    <section className="product-carousel" aria-labelledby="bestsellers-heading">
      <div className="section-heading"><div><p className="eyebrow">CURATED FOR YOUR HOME</p><h2 id="bestsellers-heading">Bestsellers</h2></div><a href="#bestsellers" className="text-link">Scroll to explore →</a></div>
      <div className="product-carousel-track" id="bestsellers">
        {products.map((product) => <IraiProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
