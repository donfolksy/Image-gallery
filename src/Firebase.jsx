// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVsdHV5ztO9h84hgusDx4uwLeRU3z9LnM",
  authDomain: "image-gallery-26a3f.firebaseapp.com",
  projectId: "image-gallery-26a3f",
  storageBucket: "image-gallery-26a3f.appspot.com",
  messagingSenderId: "349152660518",
  appId: "1:349152660518:web:3a38d53aa71642cbb7aae7",
  measurementId: "G-WH0CH81HFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
