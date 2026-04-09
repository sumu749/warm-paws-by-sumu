import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import toast from "react-hot-toast";

export default function Profile() {
    const { user, loading, updateUser } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    // eslint-disable-next-line react-hooks/purity
    const [avatarKey, setAvatarKey] = useState(Date.now());

    useEffect(() => {
        if (user) {
            setName(user.displayName || "");
            setPhoto(user.photoURL || "");
            setAvatarKey(Date.now());
        }
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await updateUser(name, photo);
            setAvatarKey(Date.now());
            toast.success("Profile updated!");
        } catch {
            toast.error("Update failed");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <p className="text-lg">Loading profile...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <p className="text-lg">Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form
                onSubmit={handleUpdate}
                className="card w-full max-w-md bg-base-100 shadow-xl p-6"
            >
                <h2 className="text-3xl font-bold text-center mb-4">
                    My Profile
                </h2>

                {/* Avatar */}
                <div className="flex justify-center mb-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img
                                src={
                                    photo
                                        ? `${photo}${photo.includes("?") ? "&" : "?"}v=${avatarKey}`
                                        : "https://i.ibb.co/4pDNDk1/avatar.png"
                                }
                                alt="profile"
                            />
                        </div>
                    </div>
                </div>

                {/* Name */}
                <input
                    type="text"
                    className="input input-bordered w-full mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                />

                {/* Photo URL */}
                <input
                    type="text"
                    className="input input-bordered w-full mb-3"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="Photo URL"
                />

                {/* Email (readonly) */}
                <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="input input-bordered w-full mb-3 bg-gray-100"
                />

                <button className="btn btn-primary w-full">
                    Update Profile
                </button>
            </form>
        </div>
    );
}
