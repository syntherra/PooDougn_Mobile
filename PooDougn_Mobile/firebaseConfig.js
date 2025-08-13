import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v9-compat and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKgoF7ASPB9hIpCDaLAXaHSLhjFGdFnK4",
  authDomain: "poodoug-mobile.firebaseapp.com",
  projectId: "poodoug-mobile",
  storageBucket: "poodoug-mobile.firebasestorage.app",
  messagingSenderId: "171546770188",
  appId: "1:171546770188:android:2b9c6f6862c022e8cba729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;