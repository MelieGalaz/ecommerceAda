import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContex';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';

export const Checkout = () => {
  const { carrito, calcularSubTotal, subtotal, setCarrito } =
    useContext(CarritoContext);
  const { finalizarCompra, user } = useContext(FirebaseContext);
  const navigate = useNavigate();
  console.log(carrito, user);

  const handleFinalizarCompra = () => {
    finalizarCompra(carrito, subtotal);

    setCarrito([]);

    navigate('/');
  };
  // const handleFinalizarCompra = async () => {
  //   if (!user) {
  //     console.log('Usuario no autenticado');
  //     navigate('/Login'); // Redirige al usuario a la página de inicio de sesión
  //     return;
  //   }

  //   await finalizarCompra(carrito, subtotal);

  //   setCarrito([]);
  //   navigate('/Agradecimiento');
  // };
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Button onClick={() => navigate('/')}>Regresar</Button>
      <Typography>Mis compras</Typography>
      {carrito.map((producto) => (
        <Box
          key={producto.id}
          sx={{
            padding: 2,
            borderBottom: '1px solid #ddd',
            textAlign: 'center',
          }}
        >
          <Typography>{producto.cantidad}</Typography>
          <Typography variant="h6">{producto.nombre}</Typography>
          <img
            src={producto.image}
            alt={producto.nombre}
            style={{ borderRadius: '100px', width: '100px' }}
          />
          <Typography variant="body2">Precio: ${producto.precio}</Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 500,
            }}
          >
            Subtotal: ${calcularSubTotal(producto)}
          </Typography>
        </Box>
      ))}
      <Typography>Total: $ {subtotal} </Typography>
      <Button onClick={handleFinalizarCompra}>Finalizar Compra</Button>
    </Box>
  );
};
