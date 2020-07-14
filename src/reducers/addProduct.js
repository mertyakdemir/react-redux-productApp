import { ADD_PRODUCT_FULFILLED, ADD_PRODUCT_REJECTED, 
         GET_PRODUCT_FULFILLED, GET_PRODUCT_REJECTED,
         UPDATE_PRODUCT_FULFILLED, UPDATE_PRODUCT_REJECTED 
        } from '../actions/addProduct';

const initialState = {
    products: [],
    error: {},
    product: {}
};

export default (state = initialState, action) => {
    switch(action.type){
            case ADD_PRODUCT_FULFILLED:
            return {
                ...state,
            };
            case ADD_PRODUCT_REJECTED:
            return {
                ...state,
                error: action.payload
            };
            case GET_PRODUCT_FULFILLED:
            return {
                ...state,
                product: action.payload.product
            };
            case GET_PRODUCT_REJECTED:
            return {
                ...state,
            }
            case UPDATE_PRODUCT_FULFILLED:
            return {
                ...state,
            };
            case UPDATE_PRODUCT_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
}