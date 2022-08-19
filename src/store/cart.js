
const ADDTOCART = 'cart/ADDTOCART';

export const addingToCart = () => {

    let id = "";
    let count = 0;

    return {
        type: ADDTOCART,
        cart: {
            id,
            count
        }
    }
};

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADDTOCART:
            const newId = action.cart.id;
            console.log(newId);
            const newCount = action.cart.count
            const newObj = {
                ...state,
                newId: {
                    id: newId,
                    count: newCount
                }
            };
            console.log("newObj", newObj)
            return newObj;
        default:
            return state;
    }
}
