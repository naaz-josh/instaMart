// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCB1KMxGRI-mGfoJb6NdAVYqG3a_GJQ1OM",
  authDomain: "naazmart-102f7.firebaseapp.com",
  projectId: "naazmart-102f7",
  storageBucket: "naazmart-102f7.appspot.com",
  messagingSenderId: "709450204735",
  appId: "1:709450204735:web:f09341848c68b663181a8a",
  measurementId: "G-WZTVLMJBXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db= getFirestore(app)
export const store= getStorage(app)

export default app
