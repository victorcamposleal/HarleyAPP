import firebase from 'firebase';

import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDE94xadVk8dP1G0ywSlsBLN5aPu6pf_FM",
  authDomain: "harley-cita.firebaseapp.com",
  projectId: "harley-cita",
  storageBucket: "harley-cita.appspot.com",
  messagingSenderId: "1069993891789",
  appId: "1:1069993891789:web:812d50234d88085db19684",
  measurementId: "G-NRKZ6EBVXZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // Initialize Firebase


  
  //exportamos la constante db para poder despues utilizarla en todo el codigo
  const db =firebase.firestore();

// esportamos varias cosas para utilizarlas despues
export default{
firebase,
db
}

