import {getFirestore} from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8YAxpwZCcS64PqVFJ2QgnOJt2rRuiZ8g",
  authDomain: "pokedex-app-7bb3a.firebaseapp.com",
  projectId: "pokedex-app-7bb3a",
  storageBucket: "pokedex-app-7bb3a.appspot.com",
  messagingSenderId: "1000094214639",
  appId: "1:1000094214639:web:a963012ec9c1ffed6a2e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    db,
    facebook
}
