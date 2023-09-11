import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN as string,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env
    .VITE_REACT_APP_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER as string,
  appId: import.meta.env.VITE_REACT_APP_APP_ID as string,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const db = getFirestore(app);
