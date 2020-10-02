import { categoryActionTypes } from './category.types';

const INITIAL_STATE = {
    allCategories: [],
    currentCategory: null,
    loading: false,
    errors: []
}

const categoryReducer = (state = INITIAL_STATE, action) => {
    const { type, bundle } = action;
    switch (type) {
        case categoryActionTypes.FETCH_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                allCategories: bundle || []
            };
        case categoryActionTypes.FETCH_CATEGORY_BY_NAME_SUCCESS:
            return {
                ...state,
                currentCategory: bundle
            }
        case categoryActionTypes.CLEAR_CATEGORIES:
            return {
                ...state,
                currentCategory: null
            }
        default:
            return state;
    }

}

export default categoryReducer;