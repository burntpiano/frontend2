import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPHitz9HiDvCa4iUJx-j5yS3kQK9CmOqw",
  authDomain: "fir-assignment-327c0.firebaseapp.com",
  projectId: "fir-assignment-327c0",
  storageBucket: "fir-assignment-327c0.firebasestorage.app",
  messagingSenderId: "94970160485",
  appId: "1:94970160485:web:ce880c5e80c1899e38ad8c",
  measurementId: "G-YS2N8VXX4B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
