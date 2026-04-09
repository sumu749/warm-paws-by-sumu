import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ServiceDetails from "../pages/ServiceDetails";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: "service-details",
                element: (
                    <PrivateRoute>
                        <ServiceDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "forgot-password",
                element: (
                    <PrivateRoute>
                        <ForgotPassword />
                    </PrivateRoute>
                ),
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);
export default router;
