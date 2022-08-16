import axios from "axios";

import { GET_CATEGORIES, GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from "./actionTypes"


export const getAllProducts = async (dispatch) => {
    // console.log('llega la action y se dispara el llamado al back - paso 2');
    try {
        let allProducts = await axios({
            method: 'GET',
            url: '/api/products/allproducts',
        })
            .then((response) => {
                // console.log('llega la respuesta del back');
                // console.log(response.data, 'lo que retorna la promesa');
                return response.data;
            })
            .catch((err) => console.log(err))

        // console.log('la información se manda al reducer.js - paso 3');

        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: allProducts
        })
        // console.log(allProducts, 'llama a la api y la api responde');
    } catch (error) {
        console.log(error, 'error al llamar a la api');
    }
}


export const getProductById = (porductId) => async (dispatch) => {
    // // dispatch actions, return Promise, etc.
    try {
        // console.log('llamo al back - productId', porductId)
  
        let productInfo = await axios({
            method: 'GET',
            url: '/api/products/productbyid',
            params: {
                idProduct: porductId,
            }
        })
            .then((response) => {
                return response.data;
            })
            .catch((err) => console.log(err))
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: productInfo
        })
        // console.log(productInfo, 'lo que retorn la promesa');

    } catch (error) {
        console.log(error, 'error al llama a la api');
    }
}
