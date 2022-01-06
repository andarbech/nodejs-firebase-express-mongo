import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyAltbAcrZjeHK1ut3gFR3ZqSrmB9cLU36I",
    authDomain: "chaniteo.firebaseapp.com",
    projectId: "chaniteo",
    storageBucket: "chaniteo.appspot.com",
    messagingSenderId: "764544712",
    appId: "1:764544712:web:3ac061d52826e0d0d687fd",
    measurementId: "G-BQLD1TB9GW"
  };
  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

const auth = firebase.auth();

export function onAuthStateChange() {
  return auth.onAuthStateChange(...props)
}

export function signInWithGoogle() {
  const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

  return auth.signInWithPopup(GoogleAuthProvider);
}

export function signInWithEmailAndPassword(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signUpWithEmailAndPassword(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function sendPasswordResetEmail(email) {
  return auth.sendPasswordResetEmail(email);
}

export function signOut() {
  return auth.signOut();
}

export function getCurrentUserToken() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.getIdToken();
}

export function getCurrentUserEmail() {
  if (!auth.currentUser) {
    return null;
  }

  return auth.currentUser.email;
}

export function getCurrentUser() {
  if (!auth.currentUser) {
    return null;
  }

  return {
    email: auth.currentUser.email,
    name: auth.currentUser.displayName,
    firebaseId: auth.currentUser.uid,
  };
}
