import React from "react";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
