import AuthPage from "@/pages/AuthPage";
import { createBrowserRouter } from "react-router"
import HomeLayout from "@/layouts/HomeLayout";
import Home from "@/pages/Home";
import DashboardLayout from "@/layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/auth",
                element: <AuthPage />,
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    },
]);

export default router;

// Follow this link for routing: https://reactrouter.com/7.7.1/start/data/routing