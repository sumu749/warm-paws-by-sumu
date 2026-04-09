import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { useNavigate, Link } from "react-router";
import toast from "react-hot-toast";

export default function Register() {
    const { registerUser, updateUser, googleLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const validatePassword = (password) => {
        if (!/[A-Z]/.test(password)) return "Must include an uppercase letter";
        if (!/[a-z]/.test(password)) return "Must include a lowercase letter";
        if (password.length < 6)
            return "Password must be at least 6 characters";
        return null;
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const error = validatePassword(password);
        if (error) return toast.error(error);

        registerUser(email, password)
            .then(() => {
                updateUser(name, photo);
                toast.success("Account successfully created");
                navigate("/");
            })
            .catch(() => toast.error("Signup failed"));
    };

    const handleGoogle = () => {
        googleLogin()
            .then(() => {
                toast.success("Google signup successful");
                navigate("/");
            })
            .catch(() => toast.error("Google signup failed"));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form
                onSubmit={handleRegister}
                className="card w-full max-w-md bg-base-100 shadow-xl p-6"
            >
                <h2 className="text-3xl font-bold text-center mb-4">
                    Register
                </h2>

                <input
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full mb-3"
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full mb-3"
                    required
                />

                <input
                    name="photo"
                    placeholder="Photo URL"
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

                <button className="btn btn-primary w-full">Register</button>

                <button
                    type="button"
                    onClick={handleGoogle}
                    className="btn btn-outline w-full mt-3"
                >
                    Continue with Google
                </button>

                <p className="text-center mt-3 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
}
