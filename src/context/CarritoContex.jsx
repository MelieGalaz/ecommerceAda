import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  console.log('Contenido del carrito:', carrito);
  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, removeFromCart, clearCart }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
