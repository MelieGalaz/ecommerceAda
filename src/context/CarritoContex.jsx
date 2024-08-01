import { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  // const agregarAlCarrito = (producto) => {
  //   const nuevoCarrito = [...carrito, producto];
  //   setCarrito(nuevoCarrito);
  // };
  const agregarAlCarrito = (producto) => {
    const existeEnCarrito = carrito.some((item) => item.id === producto.id);

    if (!existeEnCarrito) {
      const nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
      setCarrito(nuevoCarrito);
    }
  };

  const EliminarUnProducto = (productoAEliminar) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== productoAEliminar.id
    );
    setCarrito(nuevoCarrito);
  };
  console.log('Contenido del carrito:', carrito);

  const sumarCantidad = (productoId) => {
    const nuevoCarrito = carrito.map((producto) =>
      producto.id === productoId
        ? { ...producto, cantidad: (producto.cantidad || 0) + 1 }
        : producto
    );
    setCarrito(nuevoCarrito);
  };
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        EliminarUnProducto,
        sumarCantidad,
        cantidad,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
