import {useId} from 'react';
import {Link} from 'react-router';
import {Aside} from '~/components/Aside';
import {SEARCH_ENDPOINT, SearchFormPredictive} from '~/components/SearchFormPredictive';
import {SearchResultsPredictive} from '~/components/SearchResultsPredictive';

export function SearchPanel() {
  const queriesDatalistId = useId();
  return <Aside type="search" heading="SEARCH IRAI"><div className="predictive-search"><SearchFormPredictive>{({fetchResults, goToSearch, inputRef}) => <><input name="q" onChange={fetchResults} onFocus={fetchResults} placeholder="Search art, stories, gifting…" ref={inputRef} type="search" list={queriesDatalistId} /><button onClick={goToSearch}>Search</button></>}</SearchFormPredictive><SearchResultsPredictive>{({items, total, term, state, closeSearch}) => {const {articles, collections, pages, products, queries} = items; if (state === 'loading' && term.current) return <p>Searching…</p>; if (!total) return <SearchResultsPredictive.Empty term={term} />; return <><SearchResultsPredictive.Queries queries={queries} queriesDatalistId={queriesDatalistId}/><SearchResultsPredictive.Products products={products} closeSearch={closeSearch} term={term}/><SearchResultsPredictive.Collections collections={collections} closeSearch={closeSearch} term={term}/><SearchResultsPredictive.Pages pages={pages} closeSearch={closeSearch} term={term}/><SearchResultsPredictive.Articles articles={articles} closeSearch={closeSearch} term={term}/>{term.current ? <Link onClick={closeSearch} to={`${SEARCH_ENDPOINT}?q=${term.current}`}>View all results for “{term.current}” →</Link> : null}</>;}}</SearchResultsPredictive></div></Aside>;
}
