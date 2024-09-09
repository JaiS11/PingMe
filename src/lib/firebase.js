import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "pingme-55c0d.firebaseapp.com",
  projectId: "pingme-55c0d",
  storageBucket: "pingme-55c0d.appspot.com",
  messagingSenderId: "356428379982",
  appId: "1:356428379982:web:fbcab380974df2e93ed01f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()