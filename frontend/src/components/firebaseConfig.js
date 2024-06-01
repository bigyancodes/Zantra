// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK8UdlDHWsPzcoFcRwf2p6zarQH8HSYpA",
  authDomain: "zantra-28f42.firebaseapp.com",
  projectId: "zantra-28f42",
  storageBucket: "zantra-28f42.appspot.com",
  messagingSenderId: "383233065910",
  appId: "1:383233065910:web:caf226ba8271745aacf717",
  measurementId: "G-DJRS6KSGQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
