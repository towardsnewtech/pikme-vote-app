// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth' ;
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTsG6YtJGZ4fNTFgjhhNy7yzLWEeyzbC4",
  authDomain: "pickme-6e451.firebaseapp.com",
  projectId: "pickme-6e451",
  storageBucket: "pickme-6e451.appspot.com",
  messagingSenderId: "915138794331",
  appId: "1:915138794331:web:510d000a4a0afbb9d5007e",
  measurementId: "G-47212H42KK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app) ;
export const storage = getStorage(app) ;
