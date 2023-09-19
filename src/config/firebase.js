// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOiWBSH6V8agVyFiBn8JyC84uDq5hSsyg",
  authDomain: "fittotal.firebaseapp.com",
  projectId: "fittotal",
  storageBucket: "fittotal.appspot.com",
  messagingSenderId: "28354412028",
  appId: "1:28354412028:web:2e8d48387b57e1dc5c8679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)