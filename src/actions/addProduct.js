import axios from "axios"
import {API_BASE} from '../config'

export const ADD_PRODUCT_FULFILLED = "ADD_PRODUCT_FULFILLED";
export const ADD_PRODUCT_REJECTED = "ADD_PRODUCT_REJECTED";

export const GET_PRODUCT_FULFILLED = "GET_PRODUCT_FULFILLED";
export const GET_PRODUCT_REJECTED = "GET_PRODUCT_REJECTED";

export const UPDATE_PRODUCT_FULFILLED = "UPDATE_PRODUCT_FULFILLED";
export const UPDATE_PRODUCT_REJECTED = "UPDATE_PRODUCT_REJECTED";

export function insertProduct({ product_name, product_img }) {
    return dispatch => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: axios.post (`${API_BASE}/products`, {
                product_name,
                product_img
            })
            .then(res => console.log(res))
        })   
    }
}

export function getProduct(id) {
    return dispatch => {
        dispatch({
            type: "GET_PRODUCT",
            payload: axios.get(`${API_BASE}/products/${id}`)
           .then(res => res.data)
           .catch((error) => {
               console.log(error.message)
           })
        })
        
    }
}

export function updateProduct({_id, product_name, product_img}) {
    return dispatch => {
        dispatch({
            type: "UPDATE_PRODUCT",
            payload: axios.put(`${API_BASE}/products/${_id}`, {
                product_name,
                product_img
            })
           .then(res => res.data)
           .catch((error) => {
               console.log(error.message)
           })
        })  
    }
}