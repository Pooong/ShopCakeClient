import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index";

import { CartProvider } from "~/providers/CartProvider";
import DefaultLayout from "./components/layouts/DefaultLayout";
//Tạo cart context

function App() {
    return (
        <CartProvider>
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
        </CartProvider>
    );
}

export default App;
