import axios from "axios"
import {API_BASE} from '../config'

export const GET_PRODUCTS_FULFILLED = "GET_PRODUCTS_FULFILLED";
export const GET_PRODUCTS_REJECTED = "GET_PRODUCTS_REJECTED";


export const DELETE_PRODUCT_FULFILLED = "DELETE_PRODUCT_FULFILLED";
export const DELETE_PRODUCT_REJECTED = "DELETE_PRODUCT_REJECTED";

export function getProducts() {
    return dispatch => {
        dispatch({
            type: "GET_PRODUCTS",
            payload: axios.get(`${API_BASE}/products`)
            .then(res => res.data.products)
        })
        
    }
}

export function deleteProduct(id) {
    return dispatch => {
        dispatch({
            type: "DELETE_PRODUCT",
            payload: axios.delete(`${API_BASE}/products/${id}`)
            .then(res => Object.assign({}, res, {id}))
        })
        
    }
}