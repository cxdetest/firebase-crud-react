import { db } from './firebase';
import { collection, addDoc, deleteDoc } from 'firebase/firestore/lite';
import { toast } from 'react-toastify';

export const addUrl = async (obj) => {
  const collRef = collection(db, 'links');
  addDoc(collRef, obj);
  // await db.collection('links').doc().set(obj);

  toast('New link added!', { type: 'success', autoClose: 2000 });
};

export const getUrlByID = async (id) => {
  const doc = await db.collection('links').doc(id).get();
  return doc.data();
};

export const updateUrl = async (id, obj) => {
  await db.collection('links').doc(id).update(obj);

  toast('Link updated successfully!', { type: 'info', autoClose: 2000 });
};

export const deleteUrl = async (id) => {
  const del = window.confirm('Are you sure you want to delete this link?');

  if (!del) return;

  await deleteDoc(db, `links/${id}`);
  // await db.collection('links').doc(id).delete();
  toast('Link removed successfully!', { type: 'error', autoClose: 2000 });
};
