import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import dotenv from "dotenv"
import toast from "react-hot-toast";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.AUTH_DOMAIN,
    projectId: import.meta.env.PROJECT_ID,
    storageBucket: import.meta.env.STORAGE_BUCKET,
    messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export async function register(email, password) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        toast.success('Signed up');
        return user
    }
    catch (error) {
        toast.error(error.message);
    }
}

export async function login(email, password) {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        toast.success('Logged in');
        return user
    }
    catch (error) {
        toast.error(error.message);
    }
}

export async function logout() {
    try {
        await signOut(auth)
        toast.success('Logged out')
        return true
    }
    catch (error) {
        toast.error(error.message);
    }
}

export default app