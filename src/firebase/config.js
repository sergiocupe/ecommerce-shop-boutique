import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4K_c_UUoPsi4jJKn-kzXB4mbiqr6iPNA",
  authDomain: "shop-boutique.firebaseapp.com",
  projectId: "shop-boutique",
  storageBucket: "shop-boutique.appspot.com",
  messagingSenderId: "304427320226",
  appId: "1:304427320226:web:ac854d9077118a4a9928fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
