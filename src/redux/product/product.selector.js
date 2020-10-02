import { createSelector } from 'reselect';

const selectProduct = state => state.product;

export const selectCurrentProduct = createSelector(
    [selectProduct],
    product => product.currentProduct
)

export const selectAllProducts = createSelector(
    [selectProduct],
    product => product.products
)

export const isProductLoading = createSelector(
    [selectProduct],
    product => product.isLoading
)