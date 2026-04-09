import React from "react";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <>
            <div className="font-nunito">
                <Navbar />
                <main className="min-h-screen">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
