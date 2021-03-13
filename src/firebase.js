import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp403JISTU72DUJ7rSlS3w42G78bWx1EE",
  authDomain: "ecommerce-app-65b03.firebaseapp.com",
  projectId: "ecommerce-app-65b03",
  storageBucket: "ecommerce-app-65b03.appspot.com",
  messagingSenderId: "742478339077",
  appId: "1:742478339077:web:0801e325478d24bbb8506c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
