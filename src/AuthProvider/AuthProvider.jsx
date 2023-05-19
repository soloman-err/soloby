import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

// providers:
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // Create user with email and password:
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email & password:
  const emailPassSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google:
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Sign in with GitHub:
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // Exportable auth info:
  const authInfo = {
    createUser,
    googleSignIn,
    githubSignIn,
    emailPassSignIn,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
