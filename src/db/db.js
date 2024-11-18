import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB2HZttsoEvQzVEEA0qo3uFVKpji0qn6nQ",
    authDomain: "ecommerce-venum.firebaseapp.com",
    projectId: "ecommerce-venum",
    storageBucket: "ecommerce-venum.firebasestorage.app",
    messagingSenderId: "142067773877",
    appId: "1:142067773877:web:8a1846d25b8ef6f4e3a9fc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();


export default db
