// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-4AHa0yMBndDL2K3cvBmHZmWO-MLlls4",
  authDomain: "snaphugs-f43d4.firebaseapp.com",
  projectId: "snaphugs-f43d4",
  storageBucket: "snaphugs-f43d4.appspot.com",
  messagingSenderId: "383651216479",
  appId: "1:383651216479:web:03f6ee7f608b2dc80fefea",
  measurementId: "G-15L5JE6L2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
