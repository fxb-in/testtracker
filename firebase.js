import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCifj0qo_xYvLt2RmbbL2f1nhqo16e2efs",
    authDomain: "bus-tracking-notifying-app.firebaseapp.com",
    databaseURL: "https://bus-tracking-notifying-app-default-rtdb.firebaseio.com",
    projectId: "bus-tracking-notifying-app",
    storageBucket: "bus-tracking-notifying-app.appspot.com",
    messagingSenderId: "807318780384",
    appId: "1:807318780384:web:ab34a4fe0ae51d4644d385",
    measurementId: "G-31313H883H"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export { app, database, auth };