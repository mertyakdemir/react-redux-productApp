import { combineReducers } from 'redux';

import products from './product';
import newProduct from './addProduct';


export default combineReducers({
    products,
    newProduct
})
