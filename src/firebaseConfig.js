// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCThugpmZh2kS15x7qxEK4Ia6keZHKD9k4",
  authDomain: "focalx-todo-app.firebaseapp.com",
  projectId: "focalx-todo-app",
  storageBucket: "focalx-todo-app.firebasestorage.app",
  messagingSenderId: "647650424409",
  appId: "1:647650424409:web:88d26c26979264bfdc2348",
  measurementId: "G-4GM10PKGRQ"
};

// Initialize Firebase
export const config = initializeApp(firebaseConfig);
const analytics = getAnalytics(config);