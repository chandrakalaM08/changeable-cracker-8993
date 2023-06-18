// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCe5lvvkqnD4TtvwTPj2CQsfE7uvc5aFY",
  authDomain: "emaillog-f1e9d.firebaseapp.com",
  projectId: "emaillog-f1e9d",
  storageBucket: "emaillog-f1e9d.appspot.com",
  messagingSenderId: "332379103026",
  appId: "1:332379103026:web:dcfad38cd1d4bb3997c12b",
  measurementId: "G-V6VHJ7WHEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth}