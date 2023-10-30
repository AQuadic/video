// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1FzjrNLCiOoy7mRuIuUK8DmdHrsLaguA",
  authDomain: "testanalytica-52650.firebaseapp.com",
  projectId: "testanalytica-52650",
  storageBucket: "testanalytica-52650.appspot.com",
  messagingSenderId: "293882723959",
  appId: "1:293882723959:web:d64fda69c1a8fdcd565072",
  measurementId: "G-J4ZX9Q315Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);