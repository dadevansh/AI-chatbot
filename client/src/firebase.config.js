// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3GQHi0H31qyhmLOgW4no9TZwzzRXTk2U",
  authDomain: "major-project-7396f.firebaseapp.com",
  projectId: "major-project-7396f",
  storageBucket: "major-project-7396f.appspot.com",
  messagingSenderId: "996443784096",
  appId: "1:996443784096:web:ac9768d80765ad75cd9ac5",
  measurementId: "G-00ME74JRZW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };
