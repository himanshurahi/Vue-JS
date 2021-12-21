// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore, serverTimestamp} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDL_FbOitxx3ECCRLz8NboPszSIAsJ0noU",
    authDomain: "vue-database-28211.firebaseapp.com",
    projectId: "vue-database-28211",
    storageBucket: "vue-database-28211.appspot.com",
    messagingSenderId: "342905097457",
    appId: "1:342905097457:web:6b02aabe186784ba936d50"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firestore = getFirestore();
const auth = getAuth();
const timestamp = serverTimestamp();


export {
    firestore,
    timestamp,
    auth
}
