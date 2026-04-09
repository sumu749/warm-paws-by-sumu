import { PawPrint, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-neutral text-neutral-content mt-20">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-2 text-2xl font-bold text-primary mb-3">
                        <PawPrint />
                        WarmPaws
                    </div>

                    <p className="text-sm opacity-80">
                        Keeping pets warm, safe, and happy during winter.
                        Trusted winter pet care services and expert guidance for
                        your furry companions.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col ">
                    <h3 className="footer-title">Quick Links</h3>
                    <Link to="/" className="link link-hover hover:text-primary">
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className="link link-hover hover:text-primary"
                    >
                        Services
                    </Link>
                    <Link
                        to="/profile"
                        className="link link-hover hover:text-primary"
                    >
                        My Profile
                    </Link>
                </div>

                {/* Services */}
                <div className="flex flex-col ">
                    <h3 className="footer-title">Winter Services</h3>
                    <Link
                        to="/services/grooming"
                        className="link link-hover hover:text-primary"
                    >
                        Pet Grooming
                    </Link>
                    <Link
                        to="/services/winter-clothing"
                        className="link link-hover hover:text-primary"
                    >
                        Winter Clothing
                    </Link>
                    <Link
                        to="/services/health-checkups"
                        className="link link-hover hover:text-primary"
                    >
                        Health Checkups
                    </Link>
                    <Link
                        to="/services/emergency-care"
                        className="link link-hover hover:text-primary"
                    >
                        Emergency Care
                    </Link>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="footer-title">Contact</h3>

                    <p className="flex items-center gap-2 text-sm">
                        <Phone size={16} /> +880 1234 567 89
                    </p>

                    <p className="flex items-center gap-2 text-sm mt-2">
                        <Mail size={16} /> support@warmpaws.com
                    </p>

                    <p className="flex items-center gap-2 text-sm mt-2">
                        <MapPin size={16} /> Bogura, Bangladesh
                    </p>
                    <div className="flex gap-4 mt-4">
                        <FaFacebook className="cursor-pointer hover:text-primary" />
                        <FaInstagram className="cursor-pointer hover:text-primary" />
                        <FaTwitter className="cursor-pointer hover:text-primary" />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-content/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
                    <p>
                        © {new Date().getFullYear()} WarmPaws. All rights
                        reserved.
                    </p>

                    <div className="flex gap-6">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
