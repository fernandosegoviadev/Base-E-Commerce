import {
    GET_ALL_CATEGORIES, GET_ALL_PRODUCTS, GET_ONE_PRODUCT,
    CLEAR_ONE_PRODUCT,
} from "./actionTypes";

const initialState = {
    listCategories: [],
    allProducts: [],
    oneProduct: {},
}

export const Reducer = (state = initialState, action) => {
    // console.log(action.type, 'tipo de acción')
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            // console.log(action, 'en el reducer');
            return {
                ...state,
                allProducts: action.payload.data // data es un array de objetos
            }

        case GET_ONE_PRODUCT:
            return {
                ...state,
                oneProduct: action.payload
            }
        case CLEAR_ONE_PRODUCT:
            // console.log('llega clear Product al reducer');
            return {
                ...state, 
                oneProduct: action.payload 
            }

        case GET_ALL_CATEGORIES:
            // console.log('llega al reducer ListCategories', action.payload);
            return {
                ...state, 
                listCategories: action.payload.data 
            }


        default:
            return state;
    }
}


