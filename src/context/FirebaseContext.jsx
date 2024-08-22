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
import { useNavigate } from 'react-router';
export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loginRuta, setLoginRuta] = useState(false);
  const [productos, setProductos] = useState([]);
  const [modal, setModal] = useState(0);

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

  useEffect(() => {
    const isAuth = () => {
      onAuthStateChanged(auth, async (user) => {
        try {
          if (user) {
            const uid = user.uid;
            const userDocRef = doc(db, 'users', uid);
            onSnapshot(userDocRef, (doc) => {
              const userInfo = doc.data();
              setUser({ ...user, ...userInfo });
            });
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

  const finalizarCompra = async (carrito, subtotal) => {
    if (user && user.uid) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          orders: arrayUnion({
            carrito: [...carrito],
            fecha: new Date().toLocaleDateString(),
            total: subtotal,
          }),
        });
      } catch (error) {
        console.error('Error al finalizar la compra:', error);
      }
    } else {
      console.error('Usuario no autenticado.');
    }
  };
  const cambiarRutasLogin = (page, Boolean) => {
    navigate(page);
    setLoginRuta(Boolean);
  };
  return (
    <FirebaseContext.Provider
      value={{
        productos,
        setProductos,
        user,
        setUser,
        finalizarCompra,
        modal,
        setModal,
        cambiarRutasLogin,
        loginRuta,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
