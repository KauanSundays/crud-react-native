// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDiC5xJSk1DaJ0jHua71CIZuaObz3CdbkU",
  authDomain: "task-fd2ec.firebaseapp.com",
  projectId: "task-fd2ec",
  storageBucket: "task-fd2ec.appspot.com",
  messagingSenderId: "505800730964",
  appId: "1:505800730964:web:431e9851e8fdb69d4100c1",
  measurementId: "G-09BFW3GC7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);