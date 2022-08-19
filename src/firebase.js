// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCEzL4JAWIbkn-8YC3jV4jHqj9LZr_CXw",
  authDomain: "elective-vue-vuetify.firebaseapp.com",
  projectId: "elective-vue-vuetify",
  storageBucket: "elective-vue-vuetify.appspot.com",
  messagingSenderId: "261006942481",
  appId: "1:261006942481:web:affcdc8bcbe22a3fac2cb0",
  measurementId: "G-CE509VX11D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
//export the auth object
export { auth }

//const teststuff = db.collection('teststuff');

//const analytics = getAnalytics(app);