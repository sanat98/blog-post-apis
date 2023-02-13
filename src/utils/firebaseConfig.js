import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCMLk5Y1jE1qluGyNSx-26tpI0qgp_piEI",
  authDomain: "blog-post-apis.firebaseapp.com",
  projectId: "blog-post-apis",
  storageBucket: "blog-post-apis.appspot.com",
  messagingSenderId: "785719343260",
  appId: "1:785719343260:web:0b1022d39018aeb5bb9559",
  measurementId: "G-CW3YRR2DGM"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const User = db.collection("Users");


