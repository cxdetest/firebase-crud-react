import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
'replace with firebase credentials'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
