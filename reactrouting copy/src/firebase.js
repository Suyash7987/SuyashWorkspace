import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB0AOJyLtYq9ZbJNexiymlY1CwbGNJDuFo",
    authDomain: "optum-auth.firebaseapp.com",
    projectId: "optum-auth",
    storageBucket: "optum-auth.firebasestorage.app",
    messagingSenderId: "362699770473",
    appId: "1:362699770473:web:bab9d6da104cb7d25eb0f8"
  };
 export const app=initializeApp(firebaseConfig)
  const auth=getAuth(app);
  
 