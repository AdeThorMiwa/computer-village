import { searchActionTypes } from './search.types';
import { getDataByPage } from '../../utils';

const INITIAL_STATE = {
    searchResult: null,
    resultCount: 0
};

export default function (state = INITIAL_STATE, actions) {
    const { bundle, type } = actions;
    switch (type) {
        case searchActionTypes.FETCH_SEARCH_SUCCESS:
            console.log('f', bundle)
            return {
                ...state,
                searchResult: bundle
            }
        case searchActionTypes.FETCH_SEARCH_FULL_SUCCESS:
            return {
                ...state,
                searchResult: getDataByPage(bundle.data ? bundle.data.good : (state.searchResult || []), bundle.page),
                resultCount: bundle.data ? bundle.data.good.length : state.resultCount
            }
        case searchActionTypes.FETCH_SEARCH_STARTED:
            return {
                ...state,
                searchResult: null
            }
        default:
            return state;
    }
}