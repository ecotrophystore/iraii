import {Image, Money} from '@shopify/hydrogen';
import {Link} from 'react-router';
import type {MoneyFragment} from 'storefrontapi.generated';

export type IraiProductCardData = {
  handle: string;
  id: string;
  title: string;
  price: MoneyFragment;
  image?: {url: string; altText?: string | null; width?: number | null; height?: number | null} | null;
};

export function IraiProductCard({product}: {product: IraiProductCardData}) {
  return (
    <article className="irai-product-card">
      <Link to={`/products/${product.handle}`} prefetch="intent">
        <div className="product-card-image">
          {product.image ? <Image data={product.image} sizes="(min-width: 768px) 25vw, 72vw" alt={product.image.altText || product.title} /> : <span>IRAI</span>}
        </div>
        <p className="product-card-kicker">Crafted in small batches</p>
        <h3>{product.title}</h3>
        <Money data={product.price} />
      </Link>
      <Link className="text-link" to={`/products/${product.handle}`}>Choose finish →</Link>
    </article>
  );
}
