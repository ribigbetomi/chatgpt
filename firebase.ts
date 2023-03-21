import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import getConfig from "next/config";

// const { publicRuntimeConfig } = getConfig();
// const apiKey = publicRuntimeConfig.FIREBASE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  // apiKey: "AIzaSyANuD0ubAS2xj8ZTAABeavkVogxe9nv_yE",
  authDomain: "chatgpt-messenger-6dba4.firebaseapp.com",
  projectId: "chatgpt-messenger-6dba4",
  storageBucket: "chatgpt-messenger-6dba4.appspot.com",
  messagingSenderId: "832819315999",
  appId: "1:832819315999:web:7b1869ad083e141aa7dc2a",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
