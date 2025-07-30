import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMNTIqg0--z2miSIftZmKjDYu0JLtn5zc",
    authDomain: "webbug-38054.firebaseapp.com",
    databaseURL: "https://webbug-38054-default-rtdb.firebaseio.com",
    projectId: "webbug-38054",
    storageBucket: "webbug-38054.appspot.com",
    messagingSenderId: "681211324407",
    appId: "1:681211324407:web:527f523124a940106af0f2",
    measurementId: "G-LJERTKN8XD"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
export default { db, storage };