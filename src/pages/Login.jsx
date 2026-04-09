import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { useNavigate, useLocation, Link } from "react-router";
import toast from "react-hot-toast";

export default function Login() {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                toast.success("Login successful");
                navigate(from);
            })
            .catch(() => {
                toast.error("Invalid email or password");
            });
    };

    const handleGoogle = () => {
        googleLogin()
            .then(() => {
                toast.success("Logged in with Google");
                navigate(from);
            })
            .catch(() => toast.error("Google login failed"));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form
                onSubmit={handleLogin}
                className="card w-full max-w-md bg-base-100 shadow-xl p-6"
            >
                <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full mb-3"
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full mb-3"
                    required
                />

                <Link
                    to="/forgot-password"
                    className="text-sm text-primary mb-2"
                >
                    Forgot password?
                </Link>

                <button className="btn btn-primary w-full">Login</button>

                <button
                    type="button"
                    onClick={handleGoogle}
                    className="btn btn-outline w-full mt-3"
                >
                    Continue with Google
                </button>

                <p className="text-center mt-3 text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
}
