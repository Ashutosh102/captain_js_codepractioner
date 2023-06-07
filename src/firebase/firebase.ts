import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVCyLAuiaPX3_hUIppIYPI_tZQ7eS4ODU",
  authDomain: "leet-clone-7e8a6.firebaseapp.com",
  projectId: "leet-clone-7e8a6",
  storageBucket: "leet-clone-7e8a6.appspot.com",
  messagingSenderId: "120853992415",
  appId: "1:120853992415:web:c9ae3f2416525762a46a6a"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
