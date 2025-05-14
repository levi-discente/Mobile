import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMvXKUtOeyvL49zdSaF6018Mdt5rEiF2M",
  authDomain: "aula-f6b8b.firebaseapp.com",
  databaseURL: "https://aula-f6b8b-default-rtdb.firebaseio.com",
  projectId: "aula-f6b8b",
  storageBucket: "aula-f6b8b.firebasestorage.app",
  messagingSenderId: "172176960115",
  appId: "1:172176960115:web:2d30c277be9673db2a1806"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
