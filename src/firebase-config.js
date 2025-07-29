// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXN-sAUdhUwzlLHvbJ5Al_tATFK6k1QNI",
  authDomain: "historyblog-v2.firebaseapp.com",
  projectId: "historyblog-v2",
  storageBucket: "historyblog-v2.firebasestorage.app",
  messagingSenderId: "1083229883315",
  appId: "1:1083229883315:web:1e5d4203627cbed93919c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();