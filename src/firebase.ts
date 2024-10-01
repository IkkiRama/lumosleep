// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ3kXVbxPeYsABsynZJxKLnKzfdK-nGxI",
  authDomain: "nocturn-f10ff.firebaseapp.com",
  projectId: "nocturn-f10ff",
  storageBucket: "nocturn-f10ff.appspot.com",
  messagingSenderId: "96246454913",
  appId: "1:96246454913:web:7f08d9da21ff7977670b80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);