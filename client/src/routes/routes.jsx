import App from "@/App"
import AuthPage from "@/pages/AuthPage";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
    {
        path: "/home",
        element: <Home />,
    }
]);

export default router;

// Follow this link for routing: https://reactrouter.com/7.7.1/start/data/routing