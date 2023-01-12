import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import auth from "./firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const logInHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  function signUpHandler(email, password) {
    return createUserWithEmailAndPassword(getAuth(), email, password);
  }

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { user, signUpHandler, logInHandler };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

export const useUserAuth = () => {
  return useContext(AuthContext);
};
