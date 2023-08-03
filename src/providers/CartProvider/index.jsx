import { createContext, useEffect, useReducer, useState } from "react";
import CartReducer, { initCart } from "~/reducers/CartReducer";
import { createCart } from "~/reducers/CartReducer/actions";
const CartContext = createContext();

function CartProvider({ children }) {
    //Tạo giỏ hàng toàn cục
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [cart, setCart] = useReducer(CartReducer, initCart);

    useEffect(() => {
        setIsFirstLoad(false);
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(createCart(JSON.parse(storedCart)));
        }
    }, []);

    useEffect(() => {
        if (!isFirstLoad) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider, CartContext };
