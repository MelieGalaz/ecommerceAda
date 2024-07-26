import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const collectionReference = collection(db, "productos");
      const productoFirestore = await getDocs(collectionReference);
      const productosArray = productoFirestore.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProductos(productosArray);
    };

    const getUsuarios = async () => {
      const collectionReference = collection(db, "usuarios");
      const usuarioFirestore = await getDocs(collectionReference);
      const usuariosArray = usuarioFirestore.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsuarios(usuariosArray);
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
