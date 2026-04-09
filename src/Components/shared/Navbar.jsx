import React, { useState, useContext } from "react";
import { PawPrint, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../firebase/AuthProvider";
import { Phone, Mail, Snowflake, HeartHandshake } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut().catch(console.error);
    };

    const navLinks = (
        <>
            <NavLink to="/" className="hover:text-primary">
                Home
            </NavLink>
            <NavLink to="/services" className="hover:text-primary">
                Services
            </NavLink>

            {user && (
                <NavLink to="/profile" className="hover:text-primary">
                    My Profile
                </NavLink>
            )}
        </>
    );

    return (
        <nav className="fixed w-full bg-base-100/80 backdrop-blur-md shadow-md z-50">
            {/* Top bar */}
            <div className="bg-primary text-primary-content text-sm py-2">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex gap-5 items-center">
                        <p className="flex items-center gap-1">
                            <Phone size={16} /> +880 1234 567 89
                        </p>

                        <p className="flex items-center gap-1">
                            <Mail size={16} /> support@warmpaws.com
                        </p>
                    </div>

                    <div className="flex gap-5 items-center">
                        <p className="flex items-center gap-1">
                            <Snowflake size={16} /> Winter Care 24/7
                        </p>

                        <p className="flex items-center gap-1">
                            <HeartHandshake size={16} /> Pet Safety First
                        </p>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-2xl font-bold text-primary"
                >
                    <PawPrint />
                    WarmPaws
                </Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-8 font-medium items-center">
                    {navLinks}
                </ul>

                {/* Right side */}
                <div className="hidden md:flex items-center gap-3">
                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="btn btn-outline btn-primary btn-sm"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="btn btn-primary btn-sm"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* Avatar */}
                            <div
                                className="tooltip tooltip-bottom"
                                data-tip={user.displayName || "User"}
                            >
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img
                                            src={
                                                user.photoURL ||
                                                "https://i.ibb.co/4pDNDk1/avatar.png"
                                            }
                                            alt="user"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleLogout}
                                className="btn btn-primary btn-sm"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile toggle */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-base-100">
                    <div className="flex flex-col gap-3 font-medium">
                        {navLinks}

                        {!user ? (
                            <>
                                <Link
                                    to="/login"
                                    className="btn btn-outline btn-primary"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="btn btn-primary"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <button
                                onClick={handleLogout}
                                className="btn btn-accent"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
