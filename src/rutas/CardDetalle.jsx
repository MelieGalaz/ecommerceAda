import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';
import { CarritoContext } from '../context/CarritoContex';

export const CardDetalle = () => {
  const { id } = useParams();
  const { productos } = useContext(FirebaseContext);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const producto = productos.find((producto) => producto.id === id);

  return (
    <div>
      {producto ? (
        <>
          <img
            src={producto.image}
            alt={producto.name}
            style={{ width: 300 }}
          />
          <h2>Detalles del producto {producto.nombre}</h2>
          <p>{producto.descripcion}</p>
          <p>Precio: {producto.precio}</p>
          <button onClick={() => agregarAlCarrito(producto)}>
            agregar al carrito
          </button>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};
