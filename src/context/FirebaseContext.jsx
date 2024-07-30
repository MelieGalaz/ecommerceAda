import { createContext, useEffect, useState } from 'react';
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  // const [usuarios, setUsuarios] = useState([]);
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

    // const getUsuarios = () => {
    //   const collectionReference = collection(db, 'usuarios');
    //   onSnapshot(collectionReference, (snapshot) => {
    //     const usuariosArray = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));
    //     setUsuarios(usuariosArray);
    //   });
    // };

    getProductos();
    // getUsuarios();
  }, []);

  const loginUser = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const loggedInUser = userCredential.user;
      console.log(data);
      // Check if the user exists in Firestore
      const userDocRef = doc(db, 'users', loggedInUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // Retrieve user data from Firestore
        const userData = {
          id: loggedInUser.uid,
          email: loggedInUser.email,
          username: userDoc.data().username,
          descripcion: userDoc.data().descripcion,
          // Add more fields as needed
        };
        setUser(userData);
        console.log('User logged in:', userData.username);
      } else {
        console.error('User data not found in Firestore');
      }
    } catch (error) {
      console.error('Error during login:', error.code, error.message);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{ productos, setProductos, loginUser, user, setUser }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
