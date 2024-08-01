import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
  };

  const EliminarUnProducto = (productoAEliminar) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== productoAEliminar.id
    );
    setCarrito(nuevoCarrito);
  };

  console.log('Contenido del carrito:', carrito);
  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, EliminarUnProducto }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
