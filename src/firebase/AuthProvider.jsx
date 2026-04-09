import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import app from "./firebase.config";

// create context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  Register
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //  Login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //  Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //  Update Profile
    const updateUser = async (name, photo) => {
        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });

        // force refresh user
        setUser({
            ...auth.currentUser,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
        });
    };

    //  Logout
    const logOut = () => {
        return signOut(auth);
    };

    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        googleLogin,
        updateUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
