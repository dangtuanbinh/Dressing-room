import { createStore } from 'redux';
import { combineReducers } from 'redux';
import product from './reducers/productReducer';
import categories from './reducers/categoriesReducer';
import choosenCategory from './reducers/choosenCategory';

const reducer = combineReducers({
    product,
    categories,
    choosenCategory,
});

const  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;