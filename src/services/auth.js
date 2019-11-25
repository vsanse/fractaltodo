import { auth, gProvider } from "../firebase";
import { notify } from 'react-notify-toast';
import { uploadUserData } from "./db";

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => {
  auth.signOut();
  notify.show('Logged Out successfully!', 'warning', 4000);
}

export const getCurrentUser = () => {
  return auth.currentUser;
}


export const SingInWithGoogle = () => {
  auth.signInWithPopup(gProvider)
    .then((result) => {
      const user = result.user;
      uploadUserData();
    });
}
