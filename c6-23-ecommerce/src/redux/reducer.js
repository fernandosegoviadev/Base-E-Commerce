import { GET_CATEGORIES, GET_ALL_PRODUCTS, GET_ONE_PRODUCT } from "./actionTypes";

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
        // case "GET_INFO":
        //     // console.log('llega al reducer', action.payload);
        //     return {...state, infoApi: action.payload }

        // case "GET_CHANNEL_INFO":
        //     // console.log('llega al reducer channelInfo', action.payload);
        //     return {...state, channelInfoApi: action.payload }


        default:
            return state;
    }
}


