import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';

export const CardDetalle = () => {
  const { id } = useParams();
  const { productos } = useContext(FirebaseContext);

  const producto = productos.find((producto) => producto.id === id);

  return (
    <div>
      {producto ? (
        <>
          <h2>Detalles del producto {producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>Precio: {producto.precio}</p>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};
