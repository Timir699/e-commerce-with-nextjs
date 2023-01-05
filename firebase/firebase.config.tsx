import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3YC6C1u-fbto1JgzCl-7_82ckTput53A",
  authDomain: "e-commerce-nextjs-78991.firebaseapp.com",
  projectId: "e-commerce-nextjs-78991",
  storageBucket: "e-commerce-nextjs-78991.appspot.com",
  messagingSenderId: "1038698441661",
  appId: "1:1038698441661:web:8951b49ed6b7022ca300d4",
  databaseURL: "https://e-commerce-nextjs-78991-default-rtdb.firebaseio.com",
  // firestoreURL: ""
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
