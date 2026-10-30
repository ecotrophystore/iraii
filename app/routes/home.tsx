import { useState, type PointerEvent } from 'react';
import { Link } from 'react-router';
import { ArrowIcon } from '~/components/Icons';
import { Obj } from '~/components/Obj';
import { ProductCard, Rail } from '~/components/Card';
import { bestSellers, CAT_CARDS, collectionCount, newArrivals } from '~/lib/catalog';

export function meta() {
  return [{ title: 'IRAI · Devotional art, carved in Tamil Nadu' }];
}

/** Category card: picture swaps on hover, light follows the pointer, shop buttons fade in. */
function CategoryCard({ c }: { c: (typeof CAT_CARDS)[number] }) {
  const n = collectionCount(c.h);
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <article className="cat" style={{ ['--c' as string]: c.c, ['--c2' as string]: c.c2 }} onPointerMove={onMove}>
      <div className="cat__scene cat__scene--base" aria-hidden="true">
        <Obj shape={c.shape} o1={c.o[0]} o2={c.o[1]} />
      </div>
      <div className="cat__scene cat__scene--alt" aria-hidden="true">
        <Obj shape={c.shape2} o1={c.o2[0]} o2={c.o2[1]} />
      </div>
      <div className="cat__shade" />
      <div className="cat__glow" />
      <div className="cat__top" aria-hidden="true">
        <span className="cat__count">{n} {n === 1 ? 'piece' : 'pieces'}</span>
        <span className="cat__go"><ArrowIcon /></span>
      </div>
      <div className="cat__body">
        <h3 className="cat__title">
          <Link className="cat__link" to={`/collections/${c.h}`}>{c.title}</Link>
        </h3>
        <div className="cat__ctas">
          {c.ctas.map(([h, t], i) => (
            <Link key={h} className={`btn ${i ? 'btn--outline-light' : 'btn--white'} cat__cta`} to={`/collections/${h}`}>
              {t}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [tab, setTab] = useState<'best' | 'new'>('best');
  const products = tab === 'best' ? bestSellers() : newArrivals();

  return (
    <>
      <section className="hero" aria-label="Festival edit">
        <img className="hero__img" src="/images/hero-festival-v2.png" alt="Murugan carved shrine panel with a sunrise hill-temple backdrop" width="1672" height="941" fetchPriority="high" />
        <div className="hero__copy">
          <h1>Carved slowly. Lit every evening.</h1>
          <div className="hero__ctas">
            <Link className="btn btn--white" to="/collections/wall-art">Shop wall art</Link>
            <Link className="btn btn--white" to="/collections/sacred-objects">Shop objects</Link>
          </div>
        </div>
      </section>

      <section className="cats" aria-label="Shop by category">
        {CAT_CARDS.map((c) => (
          <CategoryCard key={c.h} c={c} />
        ))}
      </section>

      <Rail
        label="featured pieces"
        head={
          <div className="tab-row" role="tablist" aria-label="Featured lists">
            <button className="tab-title" role="tab" aria-selected={tab === 'best'} onClick={() => setTab('best')}>Bestsellers</button>
            <button className="tab-title" role="tab" aria-selected={tab === 'new'} onClick={() => setTab('new')}>New arrivals</button>
          </div>
        }
      >
        {products.map((p) => (
          <ProductCard key={`${tab}-${p.id}`} p={p} />
        ))}
      </Rail>

      <section className="promos" aria-label="Seasonal edits">
        <div className="promo" style={{ ['--c' as string]: '#2e1213' }}>
          <span className="obj obj--bell" style={{ ['--o1' as string]: '#f1d58a', ['--o2' as string]: '#b8924a', width: '26%' }} aria-hidden="true" />
          <span className="mono" style={{ fontSize: 13 }}>Limited run</span>
          <h2>The festival bells</h2>
          <div className="promo__ctas"><Link className="btn btn--outline-light" to="/collections/festival">Shop the edit</Link></div>
        </div>
        <div className="promo" style={{ ['--c' as string]: '#6f7f68' }}>
          <span className="obj obj--panel" style={{ ['--o1' as string]: '#e8dcc2', ['--o2' as string]: '#8a5a30', width: '30%' }} aria-hidden="true" />
          <span className="mono" style={{ fontSize: 13 }}>New this season</span>
          <h2>Panels for the shrine wall</h2>
          <div className="promo__ctas">
            <Link className="btn btn--outline-light" to="/collections/wall-art">Shop wall art</Link>
            <Link className="btn btn--outline-light" to="/collections/murugan">Shop Murugan</Link>
          </div>
        </div>
        <div className="promo" style={{ ['--c' as string]: '#8a5b3c' }}>
          <span className="obj obj--lamp" style={{ ['--o1' as string]: '#f1d58a', ['--o2' as string]: '#a8874a', width: '36%' }} aria-hidden="true" />
          <span className="mono" style={{ fontSize: 13 }}>Gifting</span>
          <h2>Gifts with a meaning card</h2>
          <div className="promo__ctas"><Link className="btn btn--outline-light" to="/collections/gifting">Shop gifts</Link></div>
        </div>
      </section>

      <section className="values" aria-label="How IRAI pieces are made">
        <div><span className="mono">Craft</span><h3>Carved by hand</h3><p>Every panel is cut and finished by carvers in Tiruchengode, with the grain kept in view.</p></div>
        <div><span className="mono">Materials</span><h3>Teak, brass and clay</h3><p>Solid wood, cast brass and wheel-thrown clay, chosen to age well on a shrine wall.</p></div>
        <div><span className="mono">Meaning</span><h3>A card with every piece</h3><p>Each order includes a short note on the form, the deity and how the piece is used.</p></div>
      </section>
    </>
  );
}
