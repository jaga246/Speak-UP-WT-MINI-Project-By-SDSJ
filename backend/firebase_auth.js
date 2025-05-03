import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAQdZ46Zab_zTZTkeTG97HpPzmIDqDuHE",
  authDomain: "speakupportal.firebaseapp.com",
  projectId: "speakupportal",
  storageBucket: "speakupportal.firebasestorage.app",
  messagingSenderId: "1017841133120",
  appId: "1:1017841133120:web:47380e98faad1c1e3021a5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    return {
      user: result.user,
      error: null
    };
  } catch (error) {
    return {
      user: null,
      error: error.message  
    };
  }
}

export async function handleSignup(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return {
      user: result.user,
      error: null
    };
  } catch (error) {
    return {
      user: null,
      error: error.message
    };
  }
}

export async function handleLogin(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return {
      user: result.user,
      error: null
    };
  } catch (error) {
    return {
      user: null,
      error: error.message
    };
  }
}



export async function signOutUser() {
  await firebaseSignOut(auth);
}

