import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA59GFou8tD6ZL1rK5lOCZNh2fZGD37Pp8",
    authDomain: "login-eef11.firebaseapp.com",
    projectId: "login-eef11",
    storageBucket: "login-eef11.appspot.com",
    messagingSenderId: "26794454578",
    appId: "1:26794454578:web:b09abded53022092fd162b",
    measurementId: "G-SG0Q0MN6F8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

