import { createSelector } from 'reselect';

const selectCategory = state => state.category;

export const selectAllCategory = createSelector(
    [selectCategory],
    category => category.allCategories
)

export const selectCurrentCategory = createSelector(
    [selectCategory],
    category => category.currentCategory
)