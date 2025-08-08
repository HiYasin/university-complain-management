import AuthPage from "@/pages/AuthPage";
import { createBrowserRouter } from "react-router"
// import PrivateRoute from "./PrivateRoute";
import HomeLayout from "@/layouts/HomeLayout";
import Home from "@/pages/Home";
import DashboardLayout from "@/layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
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
        element: <DashboardLayout />,
    },
]);

export default router;

// Follow this link for routing: https://reactrouter.com/7.7.1/start/data/routing