import Home from "~/components/pages/Home";
import About from "~/components/pages/About";
import CreateProduct from "~/components/pages/CreateProduct";
import Product from "~/components/pages/Product";
const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/product/create",
        component: CreateProduct,
    },

    {
        path: "/about",
        component: About,
    },
    {
        path: "/product",
        component: Product,
    },
    {
        path: "/about",
        component: About,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
