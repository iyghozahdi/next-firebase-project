// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdGo-XDtZ8bB30Sm19HP2ux-yezB_P-8Y",
  authDomain: "next-firebase-project-35065.firebaseapp.com",
  projectId: "next-firebase-project-35065",
  storageBucket: "next-firebase-project-35065.appspot.com",
  messagingSenderId: "437934582411",
  appId: "1:437934582411:web:0d9a8f5b53ccfc24d8428e",
  measurementId: "G-21SZQ2QF0V",
};

// Initialize Firebase
export const firebase =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// export const analytics = getAnalytics(firebase);
