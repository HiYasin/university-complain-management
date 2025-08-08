import AuthPage from "@/pages/AuthPage";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router"
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
    }
]);

export default router;

// Follow this link for routing: https://reactrouter.com/7.7.1/start/data/routing