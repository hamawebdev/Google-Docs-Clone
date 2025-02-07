// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth  } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdDR6Q71RAYPLrjGbuqkS_R6_paUB506o",
  authDomain: "docs-clone-93f77.firebaseapp.com",
  projectId: "docs-clone-93f77",
  storageBucket: "docs-clone-93f77.firebasestorage.app",
  messagingSenderId: "18911280260",
  appId: "1:18911280260:web:38c215ff481b44e7f4d6d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
