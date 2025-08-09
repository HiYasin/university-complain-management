import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">We couldn't find the page you were looking for or an error occurred.</p>
            <Button onClick={() => navigate("/")} >
                Go to Home
            </Button>
        </div>
    );
}
