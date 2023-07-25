import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDZE7vKGArJ_FUnBZNEfKcbXME-O8IyfO8",
    authDomain: "ecommerce-29057.firebaseapp.com",
    projectId: "ecommerce-29057",
    storageBucket: "ecommerce-29057.appspot.com",
    messagingSenderId: "377712998596",
    appId: "1:377712998596:web:57c7d8b0a4a020bb7b7191"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;