// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
// };
const firebaseConfig = {
  apiKey: "AIzaSyA0Ko5cebojki3ZWPisli1B6DiPIFWlUKs",
  authDomain: "yonexshop-bc934.firebaseapp.com",
  projectId: "yonexshop-bc934",
  storageBucket: "yonexshop-bc934.firebasestorage.app",
  messagingSenderId: "787371409847",
  appId: "1:787371409847:web:a578e232c998ca8396a832",
  measurementId: "G-GQCNYB0YGF",
};

// Prevent re-initializing
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
