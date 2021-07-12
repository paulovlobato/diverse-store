import { combineReducers } from 'redux';
import {
    ADD_PRODUCT_QUANTITY,
    SUB_PRODUCT_QUANTITY,
    GET_PRODUCT_TOTAL,
    GET_CART_TOTAL,
    ADD_PRODUCT_TO_CART,
    RESET_PRODUCT_QUANTITY
} from  '../actions';

// import { CartInterface } from '../interfaces/CartInterface';

const initState = {
    total: 0,
    products: [],
    _products: []
}

function todoProduct(state = initState, action){
    switch(action.type){

        case GET_PRODUCT_TOTAL: 
            return{ 
                ...state,
                _products: action.payload
            }

        case GET_CART_TOTAL: return{ ...state }

        case ADD_PRODUCT_TO_CART:
            const p = action.payload

            if(state.total === 0){
                // Empty cart
                const cart = {
                    id: p.id,
                    quantity: 1,
                    name: p.name,
                    image: p.image,
                    price: p.price
                }

                state.products.push(cart); 
            } else {
                // Cart has items
                let finished = false;

                state.products.map((stateProduct, key) => {
                    if(stateProduct.id === p.id) {
                        // Same item, just add the quantity
                        state.products[key].quantity++;
                        finished = true;
                    }
                });

                if(!finished){
                    let _cart = {
                        id: p.id,
                        quantity: 1,
                        name: p.name,
                        image: p.image,
                        price: p.price
                    }

                    state.products.push(_cart);
                }
            }

            return { ...state, total: state.total + 1 }

            case ADD_PRODUCT_QUANTITY:
                state.total++
                state.products[action.payload].quantity++;
              
               return { ...state }

            case SUB_PRODUCT_QUANTITY:
                const productQuantity = state.products[action.payload].quantity;

                if(productQuantity > 1){
                    state.total--;
                    state.products[action.payload].quantity--;
                }
              
                return { ...state }

            case RESET_PRODUCT_QUANTITY:
                const quantity = state.products[action.payload].quantity;

                return {
                    ...state,
                    total: state.total - quantity,
                    products: state.products.filter(stateProduct => {
                        return stateProduct.id !== state.products[action.payload].id
                    })
                }

        default:
            return state;

    }
}
const CartReducer = combineReducers({
    _todoProduct: todoProduct
});

export default CartReducer;