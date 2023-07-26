// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBBZxt1PvXhe0dO9GWBaQogQKBFFCF9P8",
  authDomain: "ding-77a76.firebaseapp.com",
  projectId: "ding-77a76",
  storageBucket: "ding-77a76.appspot.com",
  messagingSenderId: "246320682339",
  appId: "1:246320682339:web:f3267e858acac86e8cef56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };