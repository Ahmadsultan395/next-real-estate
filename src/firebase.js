// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASEI_API_KEY,
  authDomain: "next-estate-9eb5c.firebaseapp.com",
  projectId: "next-estate-9eb5c",
  storageBucket: "next-estate-9eb5c.firebasestorage.app",
  messagingSenderId: "355436818986",
  appId: "1:355436818986:web:91986e530a0246f535c953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);