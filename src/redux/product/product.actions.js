import axios from 'axios';
import { productActionTypes } from './product.types';
import { getProperSort } from '../../utils/index';
import HOST from "../../proxy"

export const fetchProductStarted = () => ({
    type: productActionTypes.FETCH_PRODUCT_STARTED
});
  
export const fetchProductSuccessful = product => ({
    type: productActionTypes.FETCH_PRODUCT_SUCCESS,
    bundle: product
});
  
export const fetchProductFailure = errorMessage => ({
    type: productActionTypes.FETCH_PRODUCT_FAIL,
    bundle: errorMessage
});
  
export const fetchProductStartAsync = productId => async dispatch => {
    dispatch(fetchProductStarted());
 
    try {
        const res = await axios.get(`${HOST}/api/good/${productId}`);

        dispatch(fetchProductSuccessful(res.data));
    } catch (e) {
        const errors = e.response.data.errors;
        dispatch(fetchProductFailure(errors));
    }
};

export const fetchProductsStarted = (paginated) => ({
    type: productActionTypes[`${paginated ? `FETCH_PRODUCTS_PAGINATED_STARTED` : `FETCH_PRODUCTS_STARTED`}`]
});
  
export const fetchProductsSuccessful = product => ({
    type: productActionTypes.FETCH_PRODUCTS_SUCCESS,
    bundle: product
});
  
export const fetchProductsFailure = errorMessage => ({
    type: productActionTypes.FETCH_PRODUCTS_FAIL,
    bundle: errorMessage
});
  
export const fetchProductsStartAsync = (url, page) => async dispatch => {
    dispatch(fetchProductsStarted(page));

    try {
        const res = await axios.get(url);

        dispatch(fetchProductsSuccessful(res.data));
    } catch (e) {
        const errors = e.response.data.errors;
        dispatch(fetchProductsFailure(errors));
    }
};

export const fetchProductByBrandNameStarted = () => ({
    type: productActionTypes.FETCH_PRODUCT_BY_BRAND_NAME_STARTED
});

export const fetchProductByBrandNameSuccess = product => ({
    type: productActionTypes.FETCH_PRODUCT_BY_BRAND_NAME_SUCCESS,
    bundle: product
});

export const fetchProductByBrandNameFail = errorMessage => ({
    type: productActionTypes.FETCH_PRODUCT_BY_BRAND_FAIL,
    bundle: errorMessage
})

export const fetchProductByBrandNameAsync = (category, brandName, sort) => async dispatch => {
    dispatch(fetchProductByBrandNameStarted());
    try {
        const res = await axios.get(`${HOST}/api/good?category=${category}&brand=${brandName}&limit=10${sort && `&sort=${getProperSort(sort)}`}`);

        dispatch(fetchProductByBrandNameSuccess(res.data))
    } catch (e) {
        const errors = e.response.data.errors;
        dispatch(fetchProductByBrandNameFail(errors))
    }
}

export const fetchProductRelatedByNameStarted = () => ({
    type: productActionTypes.FETCH_PRODUCT_RELATED_BY_NAME_STARTED
});

export const fetchProductRelatedByNameSuccess = product => ({
    type: productActionTypes.FETCH_PRODUCT_RELATED_BY_NAME_SUCCESS,
    bundle: product
});

export const fetchProductRelatedByNameFail = errorMessage => ({
    type: productActionTypes.FETCH_PRODUCT_RELATED_BY_NAME_FAIL,
    bundle: errorMessage
})

export const fetchProductRelatedByNameAsync = (category, productName) => async dispatch => {
    dispatch(fetchProductRelatedByNameStarted());
    
    try {
        const res = await axios.get(`${HOST}/api/good?search=${productName}&category=${category}&limit=1000`);

        dispatch(fetchProductRelatedByNameSuccess(res.data))
    } catch (e) {
        const errors = "Something went wrong";
        dispatch(fetchProductRelatedByNameFail(errors))
    }
}

export const clearProducts = () => dispatch => {
    dispatch({ type: productActionTypes.CLEAR_PRODUCTS})
}

export const clearProduct = () => dispatch => {
    dispatch({ type: productActionTypes.CLEAR_PRODUCT})
}