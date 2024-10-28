// firebaseConfig.js

// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "health-donald.firebaseapp.com",
  projectId: "health-donald",
  storageBucket: "health-donald.appspot.com",
  messagingSenderId: "738914753728",
  appId: "1:738914753728:web:3603586d651c7d69ee6125",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase app to use it in other parts of your project
export default app;
