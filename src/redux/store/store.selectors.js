import { createSelector } from 'reselect';

const selectStore = state => state.store;

export const selectStores = createSelector(
    [selectStore],
    store => store.stores
);

export const selectCurrentStore = createSelector(
    [selectStore],
    store => store.currentStore
);