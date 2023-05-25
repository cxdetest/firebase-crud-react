import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import { addUrl, getUrlByID, updateUrl, deleteUrl } from './utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './components/Form';
import Links from './components/Links';
import './app.scss';

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getUrls();
  }, []);

  const getUrls = async () => {
    const docs = [];
    const collRef = collection(db, 'links');
    const querySnapshot = await getDocs(collRef);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });

    /*     const docs = [];
    await db.collection('links').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      }); */
    setLinks(docs);
  };

  return (
    <>
      <Form fn={{ addUrl, updateUrl }} />
      <Links fn={{ links, getUrlByID, deleteUrl }} />
      <ToastContainer />
    </>
  );
}

export default App;
