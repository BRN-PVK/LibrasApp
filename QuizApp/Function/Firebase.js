import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANP6bvZ3gEgH4gCMfahkfaLo154cIXSCQ",
  authDomain: "librasapp-8869f.firebaseapp.com",
  projectId: "librasapp-8869f",
  storageBucket: "librasapp-8869f.appspot.com",
  messagingSenderId: "551171244215",
  appId: "1:551171244215:web:b3c9132fcebc2e76020d32"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
  