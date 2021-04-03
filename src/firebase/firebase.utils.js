import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCH52vHV3fS5NUOshrUBfu4DyYzUAUhQPA",
    authDomain: "crwn-db-b6831.firebaseapp.com",
    projectId: "crwn-db-b6831",
    storageBucket: "crwn-db-b6831.appspot.com",
    messagingSenderId: "439277566045",
    appId: "1:439277566045:web:cf06831f5f7b408e6075b4",
    measurementId: "G-Z5075QPD4Y"
  }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);