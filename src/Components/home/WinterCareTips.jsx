import React from "react";
import { FaTable } from "react-icons/fa";
import {
    FaSnowflake,
    FaPaw,
    FaShieldDog,
    FaMoon,
    FaHouseMedical,
} from "react-icons/fa6";

const winterTips = [
    {
        id: 1,
        title: "Keep Them Warm Indoors",
        description:
            "Create a cozy sleeping corner away from cold floors, windows, and direct drafts so pets stay warm throughout the night.",
        icon: FaHouseMedical,
    },
    {
        id: 2,
        title: "Hydration Still Matters",
        description:
            "Pets drink less in winter, so keep fresh water in clean bowls and place them near their resting spots.",
        icon: FaTable,
    },
    {
        id: 3,
        title: "Protect Their Paws",
        description:
            "Wipe paws after outdoor walks and keep paw pads moisturized to prevent dryness and cracking.",
        icon: FaPaw,
    },
    {
        id: 4,
        title: "Extra Fur & Coat Check",
        description:
            "Brush regularly to maintain insulation, reduce shedding, and keep the coat healthy during dry weather.",
        icon: FaShieldDog,
    },
    {
        id: 5,
        title: "Warm Night Routine",
        description:
            "Use soft blankets and maintain a comfortable room temperature before bedtime for better sleep.",
        icon: FaMoon,
    },
];

export default function WinterCareTips() {
    return (
        <section className="py-10 bg-base-200 font-nunito">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary text-white shadow-sm border px-4 py-2 mb-5">
                        <FaSnowflake className="text-base" />
                        <span className="font-semibold">
                            Seasonal Pet Wellness
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Winter Care Tips for Pets
                    </h2>
                    <p className="text-gray-600 text-lg leading-8">
                        Keep your furry companions safe, comfortable, and
                        healthy during the colder months with simple home care
                        habits.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {winterTips.map((tip) => {
                        const Icon = tip.icon;
                        return (
                            <div
                                key={tip.id}
                                className="group rounded-3xl border border-white bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <Icon className="text-xl" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    {tip.title}
                                </h3>
                                <p className="text-gray-600 leading-7">
                                    {tip.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
