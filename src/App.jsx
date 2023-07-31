import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import { createContext, useState, useEffect } from "react";
import DefaultLayout from "./components/layouts/DefaultLayout";
//Tạo cart context
export const CartContext = createContext();

function App() {
    //Tạo giỏ hàng toàn cục
    const [cart, setCart] = useState([]);

    //Lấy giỏ hàng trong localstorage
    useEffect(() => {
        if (cart.length == 0) {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                setCart(JSON.parse(storedCart));
            }
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {}, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else {
                                Layout = DefaultLayout;
                            }
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </BrowserRouter>
        </CartContext.Provider>
    );
}

export default App;
