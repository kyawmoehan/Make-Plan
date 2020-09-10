import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvAlqAM8ofB3sKkeMqRv7bmNJp9LLdeX8",
  authDomain: "make-plan-73ad9.firebaseapp.com",
  databaseURL: "https://make-plan-73ad9.firebaseio.com",
  projectId: "make-plan-73ad9",
  storageBucket: "make-plan-73ad9.appspot.com",
  messagingSenderId: "326850372469",
  appId: "1:326850372469:web:2175911bb858bd0c2ca93c",
  measurementId: "G-4BMPKRL34M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.analytics();

export default firebase;
