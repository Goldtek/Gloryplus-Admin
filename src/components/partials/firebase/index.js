
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHTowqYB2dkw3QKmrrwrref8qgVztPkdI",
    authDomain: "gloryplusintl-acd3f.firebaseapp.com",
    databaseURL: "https://gloryplusintl-acd3f.firebaseio.com",
    projectId: "gloryplusintl-acd3f",
    storageBucket: "gloryplusintl-acd3f.appspot.com",
    messagingSenderId: "243368275163",
    appId: "1:243368275163:web:980fb542cdf08e2ed9f0fe",
    measurementId: "G-C6V3MT26VB"
  
  };
  console.log(firebase)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const storage = firebase.storage();

  export {
    auth,
    firestore,
    storage,
  };