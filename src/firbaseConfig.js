// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDneMDDawFIVPK80bygMTfq_Qkgc2xngak",
  authDomain: "todo-2d606.firebaseapp.com",
  databaseURL: "https://todo-2d606-default-rtdb.firebaseio.com",
  projectId: "todo-2d606",
  storageBucket: "todo-2d606.appspot.com",
  messagingSenderId: "488551314098",
  appId: "1:488551314098:web:91bf4e6250b36f30f88fab",
  measurementId: "G-ZXGWLNN2G8"
};

// Initialize Firebase
export const config = initializeApp(firebaseConfig);
const analytics = getAnalytics(config);