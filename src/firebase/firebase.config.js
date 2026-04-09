// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqWNxwT4L5KXBzZrfXfRUOj0uoa2ILFBI",
    authDomain: "warm-paws-config.firebaseapp.com",
    projectId: "warm-paws-config",
    storageBucket: "warm-paws-config.firebasestorage.app",
    messagingSenderId: "224825776402",
    appId: "1:224825776402:web:32a30467054a126acbbbcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
