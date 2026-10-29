import { useMemo, useState } from 'react';
import { Link, useLoaderData, type LoaderFunctionArgs } from 'react-router';
import { ProductCard } from '~/components/Card';
import { CloseIcon, FilterIcon } from '~/components/Icons';
import { getCollection, PRODUCTS, money, type Collection, type Material, type Product } from '~/lib/catalog';
import { useUI } from '~/lib/store';

export function meta({ data }: { data?: { collection: Collection } }) {
  return [{ title: `${data?.collection.title ?? 'Collection'} · IRAI` }];
}

export async function loader({ params }: LoaderFunctionArgs) {
  const collection = getCollection(params.handle ?? '');
  if (!collection) throw new Response('Collection not found', { status: 404 });
  return { collection };
}

type SortKey = 'featured' | 'best' | 'az' | 'za' | 'price-asc' | 'price-desc';
const SORTS: [SortKey, string][] = [
  ['featured', 'Featured'],
  ['best', 'Best selling'],
  ['az', 'Alphabetically, A–Z'],
  ['za', 'Alphabetically, Z–A'],
  ['price-asc', 'Price, low to high'],
  ['price-desc', 'Price, high to low'],
];
const MAX_PRICE = 6000;

export default function Collection() {
  const { collection } = useLoaderData<typeof loader>();
  return <CollectionView key={collection.handle} collection={collection} />;
}

function CollectionView({ collection }: { collection: Collection }) {
  const ui = useUI();
  const [material, setMaterial] = useState<'all' | Material>('all');
  const [sort, setSort] = useState<SortKey>('featured');
  const [finishGroups, setFinishGroups] = useState<Set<string>>(new Set());
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [inStock, setInStock] = useState(false);

  const allGroups = useMemo(() => [...new Set(PRODUCTS.flatMap((p) => p.finishes.map((f) => f[2])))], []);

  const list = useMemo(() => {
    const h = collection.handle;
    let out: Product[] = PRODUCTS.filter((p) => (h === 'all' ? true : h === 'new' ? p.badges.includes('New') : p.cols.includes(h)));
    if (material !== 'all') out = out.filter((p) => p.material === material);
    out = out.filter((p) => p.price <= maxPrice);
    if (finishGroups.size) out = out.filter((p) => p.finishes.some((f) => finishGroups.has(f[2])));
    if (inStock) out = out.filter((p) => p.sizes.some((s) => s[3]));
    const cmp: Record<SortKey, ((a: Product, b: Product) => number) | null> = {
      featured: null,
      best: (a, b) => Number(b.badges.includes('Bestseller')) - Number(a.badges.includes('Bestseller')),
      az: (a, b) => a.name.localeCompare(b.name),
      za: (a, b) => b.name.localeCompare(a.name),
      'price-asc': (a, b) => a.price - b.price,
      'price-desc': (a, b) => b.price - a.price,
    };
    const fn = cmp[sort];
    if (fn) out = [...out].sort(fn);
    return out;
  }, [collection.handle, material, sort, finishGroups, maxPrice, inStock]);

  const resetFilters = () => {
    setMaterial('all');
    setSort('featured');
    setFinishGroups(new Set());
    setMaxPrice(MAX_PRICE);
    setInStock(false);
  };

  const toggleGroup = (g: string) =>
    setFinishGroups((prev) => {
      const next = new Set(prev);
      next.has(g) ? next.delete(g) : next.add(g);
      return next;
    });

  const filtersOpen = ui.open === 'filters';

  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link> / {collection.title}
      </nav>

      <section className="cat-hero" style={{ ['--c' as string]: collection.c }}>
        <span className="obj obj--panel" style={{ ['--o1' as string]: collection.o[0], ['--o2' as string]: collection.o[1] }} aria-hidden="true" />
        <div className="cat-hero__copy">
          <h1>{collection.title}</h1>
          <p>{collection.copy}</p>
        </div>
      </section>

      <div className="toolbar">
        <button className="filter-btn" onClick={() => ui.setOpen('filters')} aria-controls="filters" aria-expanded={filtersOpen}>
          <span className="ring"><FilterIcon /></span>
          Filter <small>({list.length} {list.length === 1 ? 'piece' : 'pieces'})</small>
        </button>
        <div className="seg" role="group" aria-label="Material">
          {([['all', 'All'], ['wood', 'Wood'], ['brass', 'Brass'], ['clay', 'Clay']] as const).map(([v, t]) => (
            <button key={v} aria-pressed={material === v} onClick={() => setMaterial(v)}>{t}</button>
          ))}
        </div>
        <label className="sort">
          <span className="sr-only">Sort by</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
            {SORTS.map(([v, t]) => (
              <option key={v} value={v}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      {list.length ? (
        <div className="grid">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <strong>No pieces match these filters.</strong>
          <span>Try a different material or raise the price limit.</span>
          <button className="btn btn--outline" onClick={resetFilters}>Clear filters</button>
        </div>
      )}

      <section className="seo" aria-label="About this collection">
        <div>
          <h2>{collection.title}</h2>
          <p>{collection.copy} Every piece is finished by hand, so expect small differences in grain, glaze and tone between one piece and the next. That is the mark of the maker, not a flaw.</p>
        </div>
        <div className="acc">
          <details><summary>How do I choose a size?</summary><div className="body">Measure the wall or shelf first. Leave at least 15 cm of clear space on each side of a panel so it does not feel crowded.</div></details>
          <details><summary>Can wooden pieces hang in a pooja room with lamps?</summary><div className="body">Yes. Keep them at least 30 cm above an open flame and wipe away soot with a dry cloth.</div></details>
          <details><summary>Are the finishes food-safe?</summary><div className="body">Glazed clay bowls are food-safe. Wood and brass finishes are decorative and should not hold food.</div></details>
          <details><summary>How are pieces packed?</summary><div className="body">Wrapped in cotton cloth, then boxed with corner guards. Brass is wrapped separately so it does not mark the wood.</div></details>
        </div>
      </section>

      {/* Filter drawer */}
      <aside className={`drawer drawer--left ${filtersOpen ? 'is-open' : ''}`} aria-label="Filter and sort" role="dialog" aria-modal="true" aria-hidden={!filtersOpen}>
        <div className="drawer__head">
          <h2>Filter and sort</h2>
          <button className="circle-btn" onClick={() => ui.setOpen(null)} aria-label="Close filters"><CloseIcon /></button>
        </div>
        <div className="drawer__body">
          <fieldset className="fieldset">
            <legend>Sort by</legend>
            {SORTS.map(([v, t]) => (
              <label key={v} className="check">
                <input type="radio" name="f-sort" value={v} checked={sort === v} onChange={() => setSort(v)} /> {t}
              </label>
            ))}
          </fieldset>
          <fieldset className="fieldset">
            <legend>Finish type</legend>
            {allGroups.map((g) => (
              <label key={g} className="check">
                <input type="checkbox" checked={finishGroups.has(g)} onChange={() => toggleGroup(g)} /> {g}
              </label>
            ))}
          </fieldset>
          <fieldset className="fieldset">
            <legend>Price</legend>
            <label className="sr-only" htmlFor="f-max">Maximum price</label>
            <input className="range" type="range" id="f-max" min={1000} max={MAX_PRICE} step={100} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
            <div className="range-out"><span>₹1,000</span><span>Up to {money(maxPrice)}</span></div>
          </fieldset>
          <fieldset className="fieldset">
            <legend>Availability</legend>
            <label className="check">
              <input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} /> In stock in at least one size
            </label>
          </fieldset>
        </div>
        <div className="drawer__foot" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <button className="btn btn--outline btn--lg" onClick={resetFilters}>Clear all</button>
          <button className="btn btn--dark btn--lg" onClick={() => ui.setOpen(null)}>Show {list.length} {list.length === 1 ? 'pieces' : 'piece'}</button>
        </div>
      </aside>
    </>
  );
}

