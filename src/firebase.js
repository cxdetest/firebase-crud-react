import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBzG2m0XsUjHVRqqQ3dx1vHEY2KZhgKjpE',
  authDomain: 'fir-crud-react-4c434.firebaseapp.com',
  projectId: 'fir-crud-react-4c434',
  storageBucket: 'fir-crud-react-4c434.appspot.com',
  messagingSenderId: '123631580363',
  appId: '1:123631580363:web:a75b19fd1239b4b679574e',
  measurementId: 'G-15HSY0RPMF',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
