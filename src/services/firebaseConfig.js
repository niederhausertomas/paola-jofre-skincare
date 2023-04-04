import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeAtVkWlpG0HeMLv74onzEeMExET2WCR4",
  authDomain: "paola-jofre-skincare.firebaseapp.com",
  projectId: "paola-jofre-skincare",
  storageBucket: "paola-jofre-skincare.appspot.com",
  messagingSenderId: "861846421260",
  appId: "1:861846421260:web:e79092ace06be16fec5329"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)