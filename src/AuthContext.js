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
  const [pending, setPending] = useState(true);

  const logInHandler = (email, password) => {
    return signInWithEmailAndPassword(getAuth(), email, password);
  };

  function signUpHandler(email, password) {
    return createUserWithEmailAndPassword(getAuth(), email, password);
  }

  const logOutHandler = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (currentuser) => {
      setUser(currentuser);
      setPending(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (pending) {
    return <h1>Loading ... </h1>;
  }

  const value = { user, signUpHandler, logInHandler, logOutHandler };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

export const useUserAuth = () => {
  return useContext(AuthContext);
};
