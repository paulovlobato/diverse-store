export const ADD_PRODUCT_QUANTITY = 'ADD_PRODUCT_QUANTITY';
export const SUB_PRODUCT_QUANTITY = 'SUB_PRODUCT_QUANTITY';
export const GET_PRODUCT_TOTAL = 'GET_PRODUCT_TOTAL';
export const GET_CART_TOTAL = 'GET_CART_TOTAL';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART' ;
export const UPDATE_CART = 'UPDATE_CART';
export const RESET_PRODUCT_QUANTITY = 'RESET_PRODUCT_QUANTITY';

export function GetAllProduct(payload){
    return{
        type:'GET_PRODUCT_TOTAL',
        payload
    }
}

export function GetTotal(){
    return{
        type:'GET_CART_TOTAL'
    }
}

export function AddProductToCart(payload){
    return {
        type:'ADD_PRODUCT_TO_CART',
        payload
    }
}
export function UpdateCart(payload){
    return {
        type:'UPDATE_CART',
        payload
    }
}

export function ResetItemQuantity(payload){
    return{
        type:'RESET_PRODUCT_QUANTITY',
        payload
    }
}

export function AddQuantity(payload){
    return{
        type:'ADD_PRODUCT_QUANTITY',
        payload
    }
}
export function SubQuantity(payload){
    return{
        type:'SUB_PRODUCT_QUANTITY',
        payload
    }
}

