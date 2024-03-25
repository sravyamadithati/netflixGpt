// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCYMM2h3tRNmGYk_pxu6Iq1Bc4hDAEOBE",
  authDomain: "netfix-gpt-46919.firebaseapp.com",
  projectId: "netfix-gpt-46919",
  storageBucket: "netfix-gpt-46919.appspot.com",
  messagingSenderId: "651227239714",
  appId: "1:651227239714:web:ba771e64571856702fc17b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
//added this line by me,so that i can decalre auth in central place and use it anywhere in our app by exporting it
