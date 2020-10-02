import React, { useEffect } from 'react'
import { SearchContainer } from '../style'
import SearchNavigation from '../components/SearchNavigation/SearchNavigation'
import { ProductItem } from '../components/ItemCards/product-item/ProductItem';
import { ZeroFound, Spinner } from '../components/Helpers/Helpers';
import { connect } from 'react-redux';
import { fetchSearch } from '../redux/search/search.action';
import { selectSearchResult, selectSearchResultCount } from '../redux/search/search.selector';
import { createStructuredSelector } from 'reselect';

const Search = ({ match, search, searchResult, count }) => {
    const page = match.params.page || 1;
    
    useEffect(() => {
        search(match.params.query, page)
    }, [search, match.params.query, match.params.page, page])

    return (
        <SearchContainer>
            <div className="__search-topper">{count} Product Found</div>
            <SearchNavigation match={match} pageAmount={Math.ceil(count / 10)} />
            <section className="row m-0">
                { searchResult ? <> { searchResult.length ? (
                    searchResult.map((product, i) => <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-auto p-0"><ProductItem {...product} /></div>)
                ) : <ZeroFound /> } </> : <div style={{justifyContent: 'center'}} className="col-12 p-3 d-flex"><Spinner size={40} /></div> }
            </section>
        </SearchContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    searchResult: selectSearchResult,
    count: selectSearchResultCount
})

const mapDispatchToProps = dispatch => ({
    search: (query, page) => dispatch(fetchSearch(query, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
