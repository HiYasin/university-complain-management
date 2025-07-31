import App from "@/App"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

export default router;

// Follow this link for routing: https://reactrouter.com/7.7.1/start/data/routing