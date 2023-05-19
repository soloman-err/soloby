import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext();
const auth = getAuth(app);

// providers:
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email and password:
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email & password:
  const emailPassSignIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google:
  const googleSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  // Sign in with GitHub:
  const githubSignIn = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider);
  };

  // User observer:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // User exit:
  const logOut = () => {
    setLoading(true);
    Swal.fire({
      title: "Wanna leave?",
      text: "You'll be logged out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged out!", "Join us again soon.", "success");
        return signOut(auth);
      }
    });
  };

  // Exportable auth info:
  const authInfo = {
    user,
    createUser,
    googleSignIn,
    githubSignIn,
    emailPassSignIn,
    setLoading,
    logOut,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
