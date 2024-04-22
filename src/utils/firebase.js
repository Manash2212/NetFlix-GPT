// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWvPw2pX5BUuSU8-ee1w9eqjhUCNX-N0M",
  authDomain: "netflixgpt-e2d95.firebaseapp.com",
  projectId: "netflixgpt-e2d95",
  storageBucket: "netflixgpt-e2d95.appspot.com",
  messagingSenderId: "853256354184",
  appId: "1:853256354184:web:5439b2926ecc42eeaca23d",
  measurementId: "G-6SS1WS3GFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
