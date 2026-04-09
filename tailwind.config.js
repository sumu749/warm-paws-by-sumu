/* eslint-disable no-undef */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {},
    },

    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            {
                warmPaws: {
                    primary: "#60A5FA",
                    secondary: "#A7F3D0",
                    accent: "#FDBA74",
                    neutral: "#1F2937",
                    "base-100": "#F9FAFB",
                    "base-200": "#F3F4F6",
                    "base-content": "#1F2937",
                    info: "#38BDF8",
                    success: "#4ADE80",
                    warning: "#FACC15",
                    error: "#F87171",
                },
            },
            "light", // optional fallback
        ],
    },
};
