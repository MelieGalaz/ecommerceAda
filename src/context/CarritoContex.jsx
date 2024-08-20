import { createContext, useState, useEffect } from 'react';
import {
  getAddedProducts,
  setCartLS,
  clearCartAfterTimeout,
} from '../localStorage';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(getAddedProducts());
  const [cantidad, setCantidad] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Limpiar el carrito después de 1 minuto
    const intervalId = setInterval(() => {
      clearCartAfterTimeout(setCarrito);
    }, 60 * 1000); // Revisa cada minuto

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
  }, []);

  useEffect(() => {
    // Calcular subtotal y cantidad
    const totalCantidad = carrito.reduce(
      (acc, producto) => acc + (producto.cantidad || 0),
      0
    );
    const totalSubtotal = carrito.reduce(
      (acc, producto) => acc + producto.precio * (producto.cantidad || 0),
      0
    );

    setCantidad(totalCantidad);
    setSubtotal(totalSubtotal);
  }, [carrito]);

  const actualizarCarrito = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    setCartLS(nuevoCarrito);
  };

  const agregarAlCarrito = (producto) => {
    const productoExiste = carrito.find((item) => item.id === producto.id);
    const nuevoCarrito = productoExiste
      ? carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      : [...carrito, { ...producto, cantidad: 1 }];

    actualizarCarrito(nuevoCarrito);
  };

  const EliminarUnProducto = (productoAEliminar) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== productoAEliminar.id
    );
    actualizarCarrito(nuevoCarrito);
  };

  const sumarCantidad = (productoId) => {
    const nuevoCarrito = carrito.map((producto) =>
      producto.id === productoId
        ? { ...producto, cantidad: (producto.cantidad || 0) + 1 }
        : producto
    );
    actualizarCarrito(nuevoCarrito);
  };

  const restarCantidad = (productoId) => {
    const nuevoCarrito = carrito.map((producto) => {
      if (producto.id === productoId) {
        const nuevaCantidad = (producto.cantidad || 0) - 1;
        return {
          ...producto,
          cantidad: nuevaCantidad > 0 ? nuevaCantidad : 1,
        };
      }
      return producto;
    });
    actualizarCarrito(nuevoCarrito);
  };

  const calcularSubTotal = (producto) => {
    return producto.precio * (producto.cantidad || 0);
  };

  const eliminarTodo = () => {
    setCarrito([]);

    localStorage.removeItem('carrito');
    localStorage.removeItem('cartTimestamp');
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        EliminarUnProducto,
        sumarCantidad,
        cantidad,
        restarCantidad,
        calcularSubTotal,
        subtotal,
        setCarrito,
        eliminarTodo,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
