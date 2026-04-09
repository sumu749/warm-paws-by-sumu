import React, { Suspense } from "react";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import { Outlet } from "react-router";
import Loading from "../Components/shared/Loading";

const MainLayout = () => {
    return (
        <>
            <div className="font-nunito">
                <Navbar />
                <main className="min-h-screen">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
