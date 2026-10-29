import { useMemo, useState, type CSSProperties } from 'react';
import { Link, useLoaderData, type LoaderFunctionArgs } from 'react-router';
import { ProductCard, Rail } from '~/components/Card';
import { AddedBody } from '~/components/Overlays';
import { ArrowIcon } from '~/components/Icons';
import { Obj } from '~/components/Obj';
import { getCollection, getProduct, money, objColours, PRODUCTS, productUnitPrice, SHIP_FREE, type Product } from '~/lib/catalog';
import { useCart, useUI } from '~/lib/store';

export function meta({ data }: { data?: { product: Product } }) {
  return [{ title: `${data?.product.name ?? 'Piece'} · IRAI` }];
}

export async function loader({ params }: LoaderFunctionArgs) {
  const product = getProduct(params.handle ?? '');
  if (!product) throw new Response('Product not found', { status: 404 });
  return { product };
}

export default function ProductPage() {
  const { product } = useLoaderData<typeof loader>();
  return <ProductView key={product.id} product={product} />;
}

const VIEW_SCALES = [1, 0.95, 0.75, 0.55, 0.85];

function ProductView({ product: p }: { product: Product }) {
  const cart = useCart();
  const ui = useUI();
  const [fi, setFi] = useState(0);
  const [si, setSi] = useState<number | null>(null);
  const [qty, setQty] = useState(1);
  const [view, setView] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  const groups = useMemo(() => [...new Set(p.finishes.map((f) => f[2]))], [p]);
  const col = getCollection(p.cols[0]);
  const related = useMemo(
    () =>
      PRODUCTS.filter((x) => x.id !== p.id && x.cols.some((c) => p.cols.includes(c)))
        .concat(PRODUCTS.filter((x) => x.id !== p.id))
        .filter((x, i, a) => a.findIndex((y) => y.id === x.id) === i)
        .slice(0, 8),
    [p]
  );

  const { o1, o2 } = objColours(p, fi);
  const unitPrice = productUnitPrice(p, si);

  const addToCart = () => {
    if (si === null) return;
    cart.add(p.id, p.finishes[fi][0], p.sizes[si][0], qty);
    ui.openModal('Added to cart', <AddedBody id={p.id} finish={p.finishes[fi][0]} size={p.sizes[si][0]} qty={qty} />);
  };

  const sizeGuide = () =>
    ui.openModal(
      'Size guide',
      <>
        <p>Measure the space first. Leave about 15 cm clear on each side of a wall piece.</p>
        <div style={{ overflowX: 'auto' }}>
          <table className="size-table">
            <thead><tr><th>Size</th><th>Metric</th><th>Best for</th></tr></thead>
            <tbody>
              {p.sizes.map((s, i) => (
                <tr key={s[0]}>
                  <td>{s[0]}</td>
                  <td>{s[1]}</td>
                  <td>{['Home shrine, desk', 'Living room wall', 'Large wall, entrance'][i] ?? 'Any'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );

  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/collections/${p.cols[0]}`}>{col?.title ?? 'Shop'}</Link>
      </nav>

      <section className="pdp">
        <div className="gallery">
          <div
            className={`gallery__main ${zoomed ? 'is-zoomed' : ''}`}
            role="img"
            aria-label={`${p.name}, view ${view + 1} of 5`}
            onClick={() => setZoomed((z) => !z)}
          >
            <Obj
              shape={p.shape}
              o1={o1}
              o2={o2}
              style={{ transform: view ? `scale(${VIEW_SCALES[view]}) rotate(${(view - 2.5) * 6}deg)` : undefined }}
            />
            <button className="circle-btn prev" onClick={(e) => { e.stopPropagation(); setView((v) => (v + 4) % 5); }} aria-label="Previous image">
              <ArrowIcon dir={-1} />
            </button>
            <button className="circle-btn next" onClick={(e) => { e.stopPropagation(); setView((v) => (v + 1) % 5); }} aria-label="Next image">
              <ArrowIcon dir={1} />
            </button>
          </div>
          <div className="gallery__thumbs">
            {[1, 2, 3, 4].map((i) => (
              <button key={i} className="thumb" onClick={() => setView(i)} aria-label={`View ${i + 1}`} aria-current={view === i}>
                <Obj shape={p.shape} o1={o1} o2={o2} style={{ transform: `scale(${VIEW_SCALES[i]}) rotate(${(i - 1.5) * 6}deg)` }} />
              </button>
            ))}
          </div>
        </div>

        <div className="info">
          <h1>{p.name}</h1>
          <p className="also">Also available in: <Link to="/collections/gifting">Gift box edition</Link></p>
          <div className="price-row">
            <strong>{money(unitPrice)}</strong>
            {p.was && <s style={{ color: 'var(--ink-faint)' }}>{money(p.was)}</s>}
            {p.price >= SHIP_FREE && <span className="tag">+ Free shipping</span>}
          </div>

          <div className="opt-label">Finish<b>{p.finishes[fi][0]}</b><em>({p.finishes[fi][2]})</em></div>
          {groups.map((g) => (
            <div key={g}>
              <div className="group-label">{g}</div>
              <div className="finish-row">
                {p.finishes.map((f, i) =>
                  f[2] === g ? (
                    <button key={f[0]} className="sw" style={{ ['--c' as string]: f[1] }} aria-label={f[0]} aria-current={i === fi} onClick={() => setFi(i)} />
                  ) : null
                )}
              </div>
            </div>
          ))}

          <div className="size-tabs" role="tablist" aria-label="Size units">
            <button role="tab" aria-selected={unit === 'in'} onClick={() => setUnit('in')}>Inches</button>
            <button role="tab" aria-selected={unit === 'cm'} onClick={() => setUnit('cm')}>Centimetres</button>
          </div>
          <div className="size-grid">
            {p.sizes.map((s, i) => (
              <button
                key={s[0]}
                className="size"
                aria-pressed={si === i}
                disabled={!s[3]}
                aria-label={s[3] ? undefined : `${s[0]}, sold out`}
                onClick={() => setSi(i)}
              >
                {unit === 'in' ? s[0] : s[1]}
              </button>
            ))}
          </div>
          <div className="fit">
            Most customers choose the smallest size for a home shrine.
            <button onClick={sizeGuide}>Size guide</button>
          </div>

          <div className="buy">
            <div className="stepper" role="group" aria-label="Quantity">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">&minus;</button>
              <span>{qty}</span>
              <button onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase quantity">+</button>
            </div>
            <button className="btn btn--dark btn--lg" onClick={addToCart} disabled={si === null}>
              {si === null ? 'Select a size' : `Add to cart · ${money(unitPrice * qty)}`}
            </button>
          </div>
          <p className="ship-line">Free shipping on orders over {money(SHIP_FREE)}</p>
        </div>
      </section>

      <div className="story-cards">
        <details className="story-card" open>
          <summary>Why this piece</summary>
          <div className="story-card__body">
            <div>
              <p className="lead">{p.lead}</p>
              <div className="label-sm">Best for</div>
              <div className="chips">{p.bestFor.map((b) => <span key={b}>{b}</span>)}</div>
              <details className="tech">
                <summary>View technical details</summary>
                <dl>
                  <dt>Weight</dt><dd>{p.weight}</dd>
                  <dt>Wood</dt><dd>{p.wood}</dd>
                  <dt>Sizes</dt><dd>{p.sizes.map((s) => s[0]).join(', ')}</dd>
                  <dt>Made in</dt><dd>{p.origin}</dd>
                </dl>
              </details>
            </div>
            <div>
              <div className="label-sm" style={{ marginTop: 0 }}>Thoughtfully made</div>
              <ul className="made-list">
                <li>Cut from a single piece where the size allows, so there are no visible joins.</li>
                <li>Finished in four coats, each cured for a full day before the next.</li>
                <li>Fitted with a concealed brass hanger, ready for one nail.</li>
                <li>Packed with a card explaining the form and its meaning.</li>
              </ul>
            </div>
          </div>
        </details>
        <details className="story-card">
          <summary>Materials &amp; craft</summary>
          <div className="materials">
            <div>
              <h4>Body</h4>
              <strong>{p.material === 'wood' ? p.wood : p.material === 'brass' ? 'Cast brass' : 'Wheel-thrown clay'}</strong>
              <p>{p.material === 'wood' ? 'Seasoned for a year before carving, so it does not split on a dry wall.' : p.material === 'brass' ? 'Sand-cast in small batches, then filed and polished by hand.' : 'Thrown on the wheel, dried slowly and fired once.'}</p>
            </div>
            <div><h4>Finish</h4><strong>Hand-applied</strong><p>Natural oils and lacquers, built up thin so the grain or metal still shows.</p></div>
            <div><h4>Fittings</h4><strong>Brass hardware</strong><p>Hangers and pins in solid brass, so they do not rust in humid rooms.</p></div>
          </div>
        </details>
        <details className="story-card">
          <summary>Care instructions</summary>
          <div className="story-card__body" style={{ gridTemplateColumns: '1fr' }}>
            <p>Dust with a soft, dry cloth. Keep away from direct sun and damp walls. Oil wood lightly once a year if it looks dry; polish brass with a mild cleaner and rinse well.</p>
          </div>
        </details>
      </div>

      <section className="features" aria-label="What you get">
        <div className="feature"><span className="mono">Hand-carved</span><p>Shaped by one carver from start to finish.</p></div>
        <div className="feature"><span className="mono">Solid material</span><p>No veneers, resin fills or plated metal.</p></div>
        <div className="feature"><span className="mono">Ready to hang</span><p>Concealed brass hanger fitted at the workshop.</p></div>
        <div className="feature"><span className="mono">Meaning card</span><p>A short note on the form and how it is used.</p></div>
      </section>

      <Rail label="related pieces" head={<h2 className="tab-title">You may also like</h2>}>
        {related.map((r) => (
          <ProductCard key={r.id} p={r} />
        ))}
      </Rail>

      <section className="sec reviews" aria-label="Reviews">
        <div>
          <h2>Reviews for {p.name}</h2>
          <p>No reviews yet. Reviews open once the first pieces from this batch are delivered.</p>
        </div>
        <Link className="btn btn--outline" to="/pages/help">Ask a question</Link>
      </section>

      <section className="band" aria-label="How we work">
        <h2>Made the slow way</h2>
        <div className="band__cols">
          <div><span className="mono">Fair pay</span><p>Carvers are paid for the hours a piece takes, not by the piece.</p></div>
          <div><span className="mono">Seasoned wood</span><p>Timber rests for a year before it is carved.</p></div>
          <div><span className="mono">Small batches</span><p>Festival pieces are made once and retired.</p></div>
        </div>
      </section>
    </>
  );
}
