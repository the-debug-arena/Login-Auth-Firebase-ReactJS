// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrB9FupDgjjVk4_guLC24ydG3retE3bME",
  authDomain: "login-auth-4736e.firebaseapp.com",
  projectId: "login-auth-4736e",
  storageBucket: "login-auth-4736e.appspot.com",
  messagingSenderId: "10562914305",
  appId: "1:10562914305:web:2cff37be4fa9ccf0a29800"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;