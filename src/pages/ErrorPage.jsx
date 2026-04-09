import { Link } from "react-router";
import { PawPrint } from "lucide-react";

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-base-200 to-base-300">
            <div className="text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4 text-primary">
                    <PawPrint size={60} className="animate-bounce" />
                </div>

                {/* 404 Title */}
                <h1 className="text-6xl font-bold text-primary">404</h1>

                <h2 className="text-2xl font-semibold mt-2">
                    Oops! Page Not Found 🐾
                </h2>

                <p className="text-gray-500 mt-2 max-w-md mx-auto">
                    Looks like your furry friend wandered off this page. Let's
                    guide you back home safely!
                </p>

                {/* Button */}
                <Link to="/">
                    <button className="btn btn-primary mt-6 px-6 hover:scale-105 transition">
                        🏠 Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
