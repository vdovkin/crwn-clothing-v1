import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCBL_4kKBBPQhX5Si0KJk33gnJ2lfbLVJE",
    authDomain: "crwn-db-bbe25.firebaseapp.com",
    projectId: "crwn-db-bbe25",
    storageBucket: "crwn-db-bbe25.appspot.com",
    messagingSenderId: "599021447788",
    appId: "1:599021447788:web:6dd57e8f41cb7f08cf8649",
    measurementId: "G-K64YPCXRXY"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;