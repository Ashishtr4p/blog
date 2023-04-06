import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcvC2MHyhPkiWtCg7qt1Sjk274hEMAbuA",
  authDomain: "blogproject-6c020.firebaseapp.com",
  projectId: "blogproject-6c020",
  storageBucket: "blogproject-6c020.appspot.com",
  messagingSenderId: "1078947583233",
  appId: "1:1078947583233:web:485c5a975f87fe1ff5b700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
