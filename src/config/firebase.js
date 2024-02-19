import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD5hVRqGEqsXirN7RJJnmHx4M2dcP4Qg0",
  authDomain: "shop-8a048.firebaseapp.com",
  projectId: "shop-8a048",
  storageBucket: "shop-8a048.appspot.com",
  messagingSenderId: "690482619041",
  appId: "1:690482619041:web:d96303bad4ab008c4f86e0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
