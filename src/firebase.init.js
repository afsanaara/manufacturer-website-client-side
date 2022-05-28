// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaYMrILLoZzTuRTiFAyqnoHEAgP0ypthU",
  authDomain: "ryans-pc.firebaseapp.com",
  projectId: "ryans-pc",
  storageBucket: "ryans-pc.appspot.com",
  messagingSenderId: "860045080931",
  appId: "1:860045080931:web:339e74800ef6ea1f4dbb56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
