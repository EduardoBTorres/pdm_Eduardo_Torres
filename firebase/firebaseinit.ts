import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getFirestore } from "firebase/firestore";

// Autentica no Firebase
export const app = initializeApp(firebaseConfig);
// Incializa o módulo de autenticação
export const auth = getAuth(app);

export const firestore = getFirestore(app);
