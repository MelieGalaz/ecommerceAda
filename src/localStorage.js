export const getAddedProducts = () => {
  return JSON.parse(localStorage.getItem('carrito')) || [];
};

export const setCartLS = (carrito) => {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  localStorage.setItem('cartTimestamp', Date.now());
};

export const clearCartAfterTimeout = (setCarrito) => {
  const cartTimestamp = localStorage.getItem('cartTimestamp');
  const oneMinuteInMs = 60 * 1000;
  // const oneDayInMs = 24 * 60 * 60 * 1000;

  if (cartTimestamp && Date.now() - cartTimestamp >= oneMinuteInMs) {
    localStorage.removeItem('carrito');
    localStorage.removeItem('cartTimestamp');

    setCarrito([]);
    console.log('Carrito y localStorage vaciados después de 1 minuto');
  }
};
