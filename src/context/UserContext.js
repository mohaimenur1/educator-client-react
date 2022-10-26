import React, { useEffect, useState } from "react";

import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  //register using email and password
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //google sign in option
  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //logut
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsbscribe();
    };
  }, []);

  const authInfo = {
    user,
    register,
    logout,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
