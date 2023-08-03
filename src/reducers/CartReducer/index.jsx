import {
    CREATE_CART,
    ADD_DETAIL,
    DELETE_DETAIL,
    INCREASE_QUANTITY,
    REDUCE_QUANTITY,
    SET_QUANTITY,
} from "./constances";
export const initCart = [];

const CartReducer = (cart, action) => {
    let newCart;
    switch (action.type) {
        case CREATE_CART:
            newCart = action.payload;
            break;
        case ADD_DETAIL:
            if (cart.find((detail) => detail.name === action.payload.name)) {
                newCart = cart.map((detail) => {
                    if (
                        detail.name === action.payload.name &&
                        detail.quantity < 99
                    ) {
                        detail.quantity += action.payload.quantity;
                    }
                    return detail;
                });
            } else {
                newCart = [...cart, action.payload];
            }
            break;

        case DELETE_DETAIL:
            newCart = cart.filter((detail) => detail !== action.payload);
            break;
        case REDUCE_QUANTITY:
            newCart = cart.map((detail) => {
                if (
                    detail.name === action.payload.name &&
                    action.payload.quantity > 1
                ) {
                    detail.quantity--;
                }
                return detail;
            });
            break;
        case INCREASE_QUANTITY:
            newCart = cart.map((detail) => {
                if (
                    detail.name === action.payload.name &&
                    action.payload.quantity < 99
                ) {
                    detail.quantity++;
                }
                return detail;
            });
            break;
        case SET_QUANTITY:
            newCart = cart.map((detail) => {
                if (
                    detail.name === action.payload.name &&
                    action.payload.quantity > 0 &&
                    action.payload.quantity < 100
                ) {
                    detail.quantity = Number(action.payload.quantity);
                }
                return detail;
            });
            break;
    }

    return newCart;
};

export default CartReducer;
