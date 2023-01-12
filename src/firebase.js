import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWtesGsCbQRgmorYUtxcrW2slHH07potA",
  authDomain: "auth-development-436e2.firebaseapp.com",
  projectId: "auth-development-436e2",
  storageBucket: "auth-development-436e2.appspot.com",
  messagingSenderId: "417041356116",
  appId: "1:417041356116:web:c29522c0cb409bd77d64c1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
