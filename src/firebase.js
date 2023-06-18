// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCybpAaKWlHNvWLekc8vcVzoKUJLv-Orho",
  authDomain: "clothy-7943b.firebaseapp.com",
  databaseURL: "https://clothy-7943b-default-rtdb.firebaseio.com",
  projectId: "clothy-7943b",
  storageBucket: "clothy-7943b.appspot.com",
  messagingSenderId: "525247651236",
  appId: "1:525247651236:web:785be6a6aebca7fd4d7531",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
