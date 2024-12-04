import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  // for user state
  const [user, setUser] = useState(null);
  // for loading state
  const [loading, setLoading] = useState(true);

  // for email sharing login to forget-password
  const [email, setEmail] = useState("");

  // for create a new user / register
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // for login a user / login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for log out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // for google login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //   // for update profile
  //   const updateUserProfile = (updatedData) => {
  //     return updateProfile(auth.currentUser, updatedData);
  //   };

  // for save the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  });

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    logOut,
    googleLogin,
    loading,
    email,
    setEmail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
