// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB4_zv0iWcnUP91C4jX71dhpROO_Pdu6ss",
  authDomain: "fir-auth-63c88.firebaseapp.com",
  projectId: "fir-auth-63c88",
  storageBucket: "fir-auth-63c88.appspot.com",
  messagingSenderId: "962468425422",
  appId: "1:962468425422:web:fc0c446f7d62a403182a9f",
  measurementId: "G-S9HXZM8BEF",
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECTS_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  //   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
