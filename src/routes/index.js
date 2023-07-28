import Home from "~/components/Home";
import About from "~/components/About";
const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
