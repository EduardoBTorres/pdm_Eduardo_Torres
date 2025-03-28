import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";

// Autentica no Firebase
export const app = initializeApp(firebaseConfig);
// Incializa o módulo de autenticação
export const auth = getAuth(app);
