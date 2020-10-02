import { storeActionTypes } from './store.types';

const INITIAL_STATE = {
    stores: [],
    currentStore: null,
    isLoading: false,
    errors: []
}

const storeReducer = (state = INITIAL_STATE, action) => {
    const { type, bundle } = action;
    switch (type) {
        case storeActionTypes.FETCH_STORES_SUCCESS:
            return {
                ...state,
                stores: bundle
            }
        case storeActionTypes.FETCH_STORE_SUCCESS:
            return {
                ...state,
                currentStore: bundle
            };
        default:
            return state;
    }

}

export default storeReducer;