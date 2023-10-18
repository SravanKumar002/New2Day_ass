
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5xWO7TzpetVEuhzgTy4Ctrvy5vXrwUfM",
  authDomain: "new2day-e7f6b.firebaseapp.com",
  projectId: "new2day-e7f6b",
  storageBucket: "new2day-e7f6b.appspot.com",
  messagingSenderId: "209184739698",
  appId: "1:209184739698:web:964e431b6584b63e8dcdeb",
  measurementId: "G-BD53PJBRY2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider(); 
export const db = getFirestore(app);
export const storage = getStorage(app);