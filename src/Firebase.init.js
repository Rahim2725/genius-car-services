// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXcSgqZ8fdpQnenNo-oqt6wq3Qx4Y2xq8",
  authDomain: "genius-car-services-9e408.firebaseapp.com",
  projectId: "genius-car-services-9e408",
  storageBucket: "genius-car-services-9e408.appspot.com",
  messagingSenderId: "390541076192",
  appId: "1:390541076192:web:68cd3985bc53363e6cd285"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;