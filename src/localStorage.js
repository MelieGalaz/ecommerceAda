export const getAddedProducts = () => {
  return JSON.parse(localStorage.getItem('carrito'));
};
export const setCartLS = (carrito) => {
  localStorage.setItem('carrito', carrito);
};
