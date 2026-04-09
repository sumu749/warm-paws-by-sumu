import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import router from "./routes/Router.jsx";
import AuthProvider from "./firebase/AuthProvider.jsx";
import Loading from "./Components/shared/Loading.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} fallbackElement={<Loading />} />
            <Toaster position="top-center" />
        </AuthProvider>
    </StrictMode>,
);
