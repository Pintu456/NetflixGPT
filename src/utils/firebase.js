// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUNTcNDswEI-Tu5tX3BcONOFKvw_CQpMU",
    authDomain: "netflixgpt-18e91.firebaseapp.com",
    projectId: "netflixgpt-18e91",
    storageBucket: "netflixgpt-18e91.appspot.com",
    messagingSenderId: "271882206640",
    appId: "1:271882206640:web:1dc1606f73c8734112aa75",
    measurementId: "G-1SSNM5XJE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();