import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVVqs9lPDbLvDpXsM9QDTQB_tiQlgv4kw",
  authDomain: "crud-react-redux-95655.firebaseapp.com",
  projectId: "crud-react-redux-95655",
  storageBucket: "crud-react-redux-95655.appspot.com",
  messagingSenderId: "865787368835",
  appId: "1:865787368835:web:25cd294a56487f311c52b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, db, googleAuthProvider};
