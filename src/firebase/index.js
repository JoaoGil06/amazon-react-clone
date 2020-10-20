import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyATNkhi9Bx_ymPWbMHwC2hLZJUHpoB214A",
  authDomain: "clone-169b5.firebaseapp.com",
  databaseURL: "https://clone-169b5.firebaseio.com",
  projectId: "clone-169b5",
  storageBucket: "clone-169b5.appspot.com",
  messagingSenderId: "809747721720",
  appId: "1:809747721720:web:b7a81a0736cc283b557a0d",
  measurementId: "G-JD90XPGBSE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
