import plantsObj from './../../plantsObj';
import { ADD_TO_CART } from './../action-types/cart.types'

const initialState = { items: [...plantsObj], addedItems: [], total: 0};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            let addedItem = state.items.find(item => item.id === action.id)

            let existingItem = state.addedItems.find(item => action.id === item.id)
            if(existingItem){
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            }else {
                addedItem.quantity = 1;

                let newTotal = state.total + addedItem.price

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        default:
            return state
    }   
}

export default cartReducer;
