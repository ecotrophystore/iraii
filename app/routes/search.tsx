import { useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router';
import { ProductCard } from '~/components/Card';
import { SearchIcon } from '~/components/Icons';
import { searchProducts } from '~/lib/catalog';

export function meta() {
  return [{ title: 'Search · IRAI' }];
}

export default function Search() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const [text, setText] = useState(q);
  const [tab, setTab] = useState<'products' | 'stories'>('products');
  const results = searchProducts(q);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setParams(text.trim() ? { q: text.trim() } : {});
  };

  const trySearch = (term: string) => {
    setText(term);
    setParams({ q: term });
  };

  return (
    <>
      <div className="search-head">
        <form className="search-box" role="search" onSubmit={submit}>
          <label className="sr-only" htmlFor="page-q">Search</label>
          <input id="page-q" type="search" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search wall art, deities, gifts" />
          {text && (
            <button type="button" className="icon-btn" onClick={() => { setText(''); setParams({}); }} aria-label="Clear search">
              <svg width="12" height="12" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={1.5}><path d="M1 1l10 10M11 1L1 11" /></svg>
            </button>
          )}
          <button className="icon-btn" type="submit" aria-label="Search"><SearchIcon /></button>
        </form>
        <p className="search-meta">
          {q
            ? results.length
              ? `We found ${results.length} ${results.length === 1 ? 'result' : 'results'} for “${q}”`
              : `No results for “${q}”`
            : 'Type a word above to search the collection.'}
        </p>
      </div>

      <div className="toolbar">
        <span className="filter-btn" style={{ cursor: 'default' }}>
          <span className="ring" aria-hidden="true"><SearchIcon size={14} /></span>
          Results
        </span>
        <div className="tab-row" role="tablist" aria-label="Result type">
          <button className="tab-title" style={{ fontSize: 14 }} role="tab" aria-selected={tab === 'products'} onClick={() => setTab('products')}>Products</button>
          <button className="tab-title" style={{ fontSize: 14 }} role="tab" aria-selected={tab === 'stories'} onClick={() => setTab('stories')}>Stories</button>
        </div>
        <span />
      </div>

      {tab === 'products' ? (
        results.length ? (
          <div className="grid">
            {results.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <strong>{q ? 'Nothing matched that search.' : 'Start with a word like Murugan, brass or gift.'}</strong>
            <span>Try one of these instead.</span>
            <div className="chips" style={{ justifyContent: 'center' }}>
              {['Murugan', 'Brass', 'Panel', 'Gift'].map((t) => (
                <button key={t} className="btn btn--outline" onClick={() => trySearch(t)}>{t}</button>
              ))}
            </div>
          </div>
        )
      ) : (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))' }}>
          <Link className="feature" to="/pages/our-story" style={{ textDecoration: 'none' }}>
            <span className="mono">Our story</span>
            <p>Why IRAI works with carvers in Tiruchengode, and how pieces are priced.</p>
          </Link>
          <Link className="feature" to="/pages/help" style={{ textDecoration: 'none' }}>
            <span className="mono">Care guide</span>
            <p>Looking after wood, brass and glazed clay in a working shrine.</p>
          </Link>
        </div>
      )}
    </>
  );
}
