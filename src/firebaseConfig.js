import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBOYRYDzLcetw8sQhrw7GadvQO6e0LIw4w",
  authDomain: "blog-project-831c9.firebaseapp.com",
  projectId: "blog-project-831c9",
  storageBucket: "blog-project-831c9.appspot.com",
  messagingSenderId: "670897762536",
  appId: "1:670897762536:web:1fd9cea5f2eba5a5fb995d"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);