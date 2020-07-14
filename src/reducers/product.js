import { GET_PRODUCTS_FULFILLED, GET_PRODUCTS_REJECTED, DELETE_PRODUCT_FULFILLED, DELETE_PRODUCT_REJECTED } from '../actions/products';

const initialState = {
    products: [],
    error: {}
};

export default (state = initialState, action) => {
    switch(action.type){
            case GET_PRODUCTS_FULFILLED:
            return {
                ...state,
                products: action.payload
            };
            case GET_PRODUCTS_REJECTED:
            return {
                ...state,
                error: action.payload
            }
            case DELETE_PRODUCT_FULFILLED:
                return {
                    ...state,
                    products: state.products.filter( x => x._id !== action.payload.id)
                };
            case DELETE_PRODUCT_REJECTED:
                return {
                    ...state,
                    error: action.payload
                }
        default:
            return state;
    }
}