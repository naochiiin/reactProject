import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADA6C3Jd31TGGCGRl062GJG9nslXuCKEE",
  authDomain: "my-project-705-348312.firebaseapp.com",
  projectId: "my-project-705-348312",
  storageBucket: "my-project-705-348312.appspot.com",
  messagingSenderId: "916332436809",
  appId: "1:916332436809:web:defb2f32455455a14cce98"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
