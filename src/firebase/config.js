// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhu53GpmqaMcpHvzQbT4FlqJFOewp8_Fc",
    authDomain: "react-cursos-38516.firebaseapp.com",
    projectId: "react-cursos-38516",
    storageBucket: "react-cursos-38516.appspot.com",
    messagingSenderId: "721571253008",
    appId: "1:721571253008:web:26a0a27a56b20af18e7395"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

