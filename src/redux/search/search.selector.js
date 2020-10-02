import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchResult = createSelector(
    [selectSearch],
    search => search.searchResult
)

export const selectSearchResultCount = createSelector(
    [selectSearch],
    search => search.resultCount
)