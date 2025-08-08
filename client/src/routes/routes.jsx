import AuthPage from "@/pages/AuthPage";
import Dashboard from "@/pages/Dashboard";
import { createBrowserRouter } from "react-router"
import PrivateRoute from "./PrivateRoute";
import HomeLayout from "@/layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
    },
    {
        path: "/user",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
    }
]);

export default router;

// Follow this link for routing: https://reactrouter.com/7.7.1/start/data/routing