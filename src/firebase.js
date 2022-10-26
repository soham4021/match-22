import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPfjvOddR1BA_y5_VtRHOAOPOAetHcpOw",
  authDomain: "tinder-clone-oct22.firebaseapp.com",
  projectId: "tinder-clone-oct22",
  storageBucket: "tinder-clone-oct22.appspot.com",
  messagingSenderId: "259086737114",
  appId: "1:259086737114:web:c833418e1ea41611ba0fe3",
  measurementId: "G-PQRVSP5D4V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
