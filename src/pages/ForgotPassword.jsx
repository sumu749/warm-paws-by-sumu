import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";

const auth = getAuth(app);

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleReset = (e) => {
        e.preventDefault();

        if (!email) {
            return toast.error("Please enter your email");
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent!");

                // 🔥 Redirect to Gmail
                window.open("https://mail.google.com", "_blank");
            })
            .catch(() => {
                toast.error("Failed to send reset email");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form
                onSubmit={handleReset}
                className="card w-full max-w-md bg-base-100 shadow-xl p-6"
            >
                <h2 className="text-2xl font-bold text-center mb-4">
                    Reset Password
                </h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button className="btn btn-primary w-full">
                    Send Reset Email
                </button>
            </form>
        </div>
    );
}
