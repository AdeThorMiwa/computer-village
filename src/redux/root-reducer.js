import { combineReducers } from 'redux';
import {reducer as toastr} from 'react-redux-toastr';

import store from './store/store.reducer';
import site from './site/site.reducer';
import product from './product/product.reducer';
import category from './category/category.reducer';
import search from './search/search.reducer';

export default combineReducers({
    toastr,
    store,
    site,
    product,
    category,
    search
});