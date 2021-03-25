import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4Oe77mtEphYTieIgqzspLAOJ9jApN8tM",
  authDomain: "context-test-app.firebaseapp.com",
  projectId: "context-test-app",
  storageBucket: "context-test-app.appspot.com",
  messagingSenderId: "157990172191",
  appId: "1:157990172191:web:d15599ba4a3df141aec72a"
};
//1. Initialize firebase
firebase.initializeApp(firebaseConfig);
//2. export our firestore and with variables for us to use
export const firestore = firebase.firestore();
export const auth = firebase.auth();