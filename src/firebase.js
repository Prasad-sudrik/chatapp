import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAX85pamdODcbVvZr1C9G0YOY8DUnaF8gc",
  authDomain: "chat-18a7f.firebaseapp.com",
  projectId: "chat-18a7f",
  storageBucket: "chat-18a7f.appspot.com",
  messagingSenderId: "177804129508",
  appId: "1:177804129508:web:02614b80d944561fc828f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();