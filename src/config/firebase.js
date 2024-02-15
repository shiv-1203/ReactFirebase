// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB1oZynKW4bWTXXz2kqGHH2CQJj0x071Ho",
  authDomain: "content-delivery-system.firebaseapp.com",
  projectId: "content-delivery-system",
  storageBucket: "content-delivery-system.appspot.com",
  messagingSenderId: "550394193473",
  appId: "1:550394193473:web:98ebbc6f1b6dfcfd9008c0",
  measurementId: "G-FTWG0S1KXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);