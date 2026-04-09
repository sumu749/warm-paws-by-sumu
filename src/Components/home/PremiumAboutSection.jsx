import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { PawPrint, HeartHandshake, Award, Stethoscope } from "lucide-react";
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

const team = [
    {
        name: "Dr. Asadul Islam Shanto",
        role: "Senior Veterinarian",
        image: "/src/assets/Image/shanto.png",
    },
    {
        name: "Lord Shanto",
        role: "Pet Care Specialist",
        image: "/src/assets/Image/shanto-2.png",
    },
    {
        name: "Dr. Nancy May",
        role: "Surgery Specialist",
        image: "/src/assets/Image/doc1.avif",
    },
    {
        name: "Dr. Amelie Plin",
        role: "Veterinary Consultant",
        image: "/src/assets/Image/doc2.avif",
    },
];

const features = [
    {
        title: "Advanced Diagnostics",
        desc: "Digital imaging, lab testing, and precise diagnostics for faster treatment decisions.",
        icon: PawPrint,
    },
    {
        title: "24/7 Pet Support",
        desc: "Emergency-ready assistance and compassionate guidance whenever your pet needs us.",
        icon: HeartHandshake,
    },
    {
        title: "Trusted Excellence",
        desc: "Recognized care standards, experienced veterinarians, and modern clinical practices.",
        icon: Award,
    },
];

export default function PremiumAboutSection() {
    const [activeTab, setActiveTab] = useState("team");

    const tabs = [
        { key: "team", label: "Our Experts" },
        { key: "clinic", label: "Our Clinic" },
        { key: "philosophy", label: "Our Philosophy" },
    ];

    return (
        <section className="py-16 bg-base-200  font-nunito">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                                activeTab === tab.key
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === "clinic" && (
                        <motion.div
                            key="clinic"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35 }}
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
                                        Compassion • Technology • Trust
                                    </p>
                                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                                        Complete veterinary care built around
                                        comfort and precision
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-8">
                                        From preventive wellness to advanced
                                        diagnostics and surgery, our clinic
                                        combines modern medical technology with
                                        a calm, pet-friendly environment to
                                        ensure safe and stress-free care.
                                    </p>
                                </div>

                                <motion.img
                                    whileHover={{ scale: 1.03 }}
                                    src="/src/assets/Image/clinic.avif"
                                    alt="Veterinary clinic"
                                    className="w-full rounded-3xl shadow-2xl object-cover"
                                />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mt-14">
                                {features.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            whileHover={{ y: -6 }}
                                            key={item.title}
                                            className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                                        >
                                            <Icon className="mb-5" size={42} />
                                            <h3 className="text-xl font-bold mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-7">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "philosophy" && (
                        <motion.div
                            key="philosophy"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-4">
                                    <Stethoscope size={18} />
                                    <span className="font-semibold">
                                        Our Care Philosophy
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
                                    Every pet deserves personalized,
                                    human-centered treatment
                                </h2>
                                <p className="text-gray-600 text-lg leading-8">
                                    We focus on prevention, early diagnosis, and
                                    transparent communication so every family
                                    feels confident in the care plan. Our
                                    approach blends medical expertise with
                                    empathy, ensuring long-term health and
                                    quality of life for every companion.
                                </p>
                            </div>

                            <motion.img
                                whileHover={{ scale: 1.03 }}
                                src="/src/assets/Image/petCare.avif"
                                alt="Our philosophy"
                                className="w-full rounded-3xl shadow-2xl object-cover"
                            />
                        </motion.div>
                    )}

                    {activeTab === "team" && (
                        <motion.div
                            key="team"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35 }}
                        >
                            <div className="text-center mb-10">
                                <h2 className="text-3xl md:text-4xl font-extrabold">
                                    Meet the specialists behind exceptional pet
                                    care
                                </h2>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {team.map((member) => (
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        key={member.name}
                                        className="rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white"
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-80 object-cover"
                                        />
                                        <div className="p-6 text-center">
                                            <h3 className="text-xl font-bold">
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-500 mt-1">
                                                {member.role}
                                            </p>
                                            <div className="flex justify-center gap-3 mt-5">
                                                <FaTwitter size={18} />
                                                <FaFacebookF size={18} />
                                                <FaLinkedinIn size={18} />
                                                <FaInstagram size={18} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
