// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx4js8jc05TifYhRtoR00yvsJGLAGqinU",
  authDomain: "netflixgpt-b72d1.firebaseapp.com",
  projectId: "netflixgpt-b72d1",
  storageBucket: "netflixgpt-b72d1.firebasestorage.app",
  messagingSenderId: "164281814167",
  appId: "1:164281814167:web:94caf857c8e7dceb03add2",
  measurementId: "G-YX4782SEHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);