import { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const initialSubtotal = carrito.reduce((acc, producto) => {
      return (
        acc + (producto.cantidad > 0 ? producto.precio * producto.cantidad : 0)
      );
    }, 0);
    setSubtotal(initialSubtotal);
    console.log(initialSubtotal);
  }, [carrito]);

  useEffect(() => {
    const initialSubtotal = carrito.reduce((acc, producto) => {
      return acc + (producto.cantidad > 0 ? producto.cantidad : 0);
    }, 0);
    setCantidad(initialSubtotal);
    console.log(initialSubtotal);
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const productoExiste = carrito.find((item) => item.id === producto.id);
    if (productoExiste) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    console.log('Carrito añadido', carrito);
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
    setCarrito(nuevoCarrito);
  };
  const calcularSubTotal = (producto) => {
    return producto.precio * producto.cantidad;
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
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
