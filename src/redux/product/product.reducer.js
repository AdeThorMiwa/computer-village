import { productActionTypes } from './product.types';
import { uniqueArray } from '../../utils';

const INITIAL_STATE = {
    products: null,
    currentProduct: null,
    isLoading: false,
    errors: []
}

const productReducer = (state = INITIAL_STATE, action) => {
    const { type, bundle } = action;
    switch (type) {
        case productActionTypes.FETCH_PRODUCT_STARTED:
        case productActionTypes.FETCH_PRODUCTS_STARTED:
        case productActionTypes.FETCH_PRODUCTS_PAGINATED_STARTED:
        case productActionTypes.FETCH_PRODUCT_BY_BRAND_NAME_STARTED:
        case productActionTypes.FETCH_PRODUCT_RELATED_BY_NAME_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case productActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: state.products ? [...state.products, ...bundle] : bundle,
                isLoading: false
            };
        case productActionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                currentProduct: bundle,
                isLoading: false
            };
        case productActionTypes.FETCH_PRODUCT_BY_BRAND_NAME_SUCCESS:
            return {
                ...state,
                products: bundle,
                isLoading: false
            }
        case productActionTypes.FETCH_PRODUCT_RELATED_BY_NAME_SUCCESS:
            return {
                ...state,
                products: uniqueArray(bundle.filter(({ store: { _id } }) => _id !== state.currentProduct.store._id), 'store._id'),
                isLoading: false
            }
        case productActionTypes.CLEAR_PRODUCT:
            return {
                ...state,
                currentProduct: null,
                isLoading: false
            }
        case productActionTypes.CLEAR_PRODUCTS:
            return {
                ...state,
                products: null,
                isLoading: false
            }
        case productActionTypes.FETCH_PRODUCT_FAIL:
        case productActionTypes.FETCH_PRODUCTS_FAIL:
        case productActionTypes.FETCH_PRODUCT_BY_BRAND_NAME_FAIL:
        case productActionTypes.FETCH_PRODUCT_RELATED_BY_NAME_FAIL:
            return {
                ...state,
                errors: bundle
            }
        default:
            return state;
    }

}

export default productReducer;