import { createContext, useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const [user, setUser] = useState(null);
  const auth = getAuth();

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

    getProductos();
  }, []);

  const getUserInfo = async (uid) => {
    try {
      const docRef = doc(db, 'users', uid);
      const document = await getDoc(docRef);
      return document.data();
    } catch (err) {
      console.log(err);
    }
  };
  const finalizarCompra = async (carrito, subtotal) => {
    if (user && user.uid) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          orders: arrayUnion({
            carrito: [...carrito],
            fecha: new Date(),
            total: subtotal,
          }),
        });
        console.log('Compra finalizada y guardada en Firestore.');
      } catch (error) {
        console.error('Error al finalizar la compra:', error);
      }
    } else {
      console.error('Usuario no autenticado.');
    }
  };
  useEffect(() => {
    const isAuth = () => {
      onAuthStateChanged(auth, async (user) => {
        try {
          if (user) {
            const uid = user.uid;
            const userInfo = await getUserInfo(uid);
            setUser({ user, userInfo }); // Guardar toda la información del usuario incluyendo `uid`
          } else {
            setUser(null);
          }
        } catch (error) {
          setUser(null);
          console.error('Error during authentication:', error);
        }
      });
    };
    isAuth();
  }, []);
  return (
    <FirebaseContext.Provider
      value={{ productos, setProductos, user, setUser, finalizarCompra }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
