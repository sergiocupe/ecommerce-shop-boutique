import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjjDYqlTzmhFJJZhK8W3oBfTOO5ivKp3o",
  authDomain: "shop-boutique23.firebaseapp.com",
  projectId: "shop-boutique23",
  storageBucket: "shop-boutique23.appspot.com",
  messagingSenderId: "112484342046",
  appId: "1:112484342046:web:e82ad9470fe8c1ff76d10f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

