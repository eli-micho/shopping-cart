import { ADD_TO_CART } from './../action-types/cart.types';

export const addToCart = (id) => {
    return { 
        type: ADD_TO_CART,
        id
    }
}
