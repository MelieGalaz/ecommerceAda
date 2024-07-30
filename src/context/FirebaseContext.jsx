import { createContext, useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getProductos = () => {
      const collectionReference = collection(db, 'productos');
      onSnapshot(collectionReference, (snapshot) => {
        const productosArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosArray);
      });
    };

    const getUsuarios = () => {
      const collectionReference = collection(db, 'usuarios');
      onSnapshot(collectionReference, (snapshot) => {
        const usuariosArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsuarios(usuariosArray);
      });
    };

    getProductos();
    getUsuarios();
  }, []);

  return (
    <FirebaseContext.Provider value={{ productos, setProductos, usuarios }}>
      {children}
    </FirebaseContext.Provider>
  );
};
