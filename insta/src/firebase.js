import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZnTtGHXH_SBU1GYQEe2crrOGEVzPSPm8",
  authDomain: "instagram-clone-1687e.firebaseapp.com",
  projectId: "instagram-clone-1687e",
  storageBucket: "instagram-clone-1687e.appspot.com",
  messagingSenderId: "157313998906",
  appId: "1:157313998906:web:28c52cf2ae3e3ce66b9503",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
