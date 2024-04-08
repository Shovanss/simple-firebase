// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ADbPeMeFC_HogUY0BxOUGVr-b-2j2zo",
  authDomain: "simple-firebase-e43ca.firebaseapp.com",
  projectId: "simple-firebase-e43ca",
  storageBucket: "simple-firebase-e43ca.appspot.com",
  messagingSenderId: "309517284326",
  appId: "1:309517284326:web:ee131102890b9b8fee1c27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app