import { auth } from "../firebase";
import { notify } from 'react-notify-toast';

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

