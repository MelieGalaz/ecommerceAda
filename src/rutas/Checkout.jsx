import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContex';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';
import fondoCheck from '../assets/fondoCheck.webp';
export const Checkout = () => {
  const { carrito, calcularSubTotal, subtotal, setCarrito } =
    useContext(CarritoContext);
  const { finalizarCompra, user } = useContext(FirebaseContext);
  const navigate = useNavigate();
  console.log(carrito, user);

  const handleFinalizarCompra = () => {
    finalizarCompra(carrito, subtotal);

    setCarrito([]);
    navigate('/Agradecimiento');
    // navigate('/');
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
    <Box
      sx={{
        backgroundColor: 'white',

        margin: { xs: '10px', sm: '20px auto' },
        padding: '5px',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: { sx: 0, sm: '100%' },
        maxWidth: 800,
        borderWidth: '10px',
        borderStyle: 'solid',
        borderImage: `url(${fondoCheck}) 10`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: '10px',
        }}
      >
        <Button
          onClick={() => navigate('/')}
          sx={{
            color: '#51074d',
            width: 'auto',
            fontWeight: 700,
            fontSize: 12,
            display: 'inline-block',
            '&:hover': {
              color: '#86067f',
            },
          }}
        >
          Regresar
        </Button>
      </Box>
      <Typography
        sx={{
          fontSize: 24,
          textAlign: 'center',
          fontWeight: 700,
          color: '#5c07a6',
        }}
      >
        Mis compras
      </Typography>
      {carrito.map((producto) => (
        <Box
          key={producto.id}
          sx={{
            padding: 1,
            borderBottom: '1px solid #ddd',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: 19 }}>
            {producto.nombre}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <img
              src={producto.image}
              alt={producto.nombre}
              width={'80px'}
              style={{
                borderRadius: 50,
                border: '5px solid #51074d',
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Cantidad</Typography>
              <Typography>{producto.cantidad}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700 }}>Precio</Typography>
              <Typography> ${producto.precio}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700 }}> Subtotal </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                }}
              >
                ${calcularSubTotal(producto)}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <Typography
        sx={{
          textAlign: 'center',
          fontWeight: 700,
        }}
      >
        Total: $ {subtotal}{' '}
      </Typography>
      <Button
        onClick={handleFinalizarCompra}
        sx={{
          color: 'white',
          borderRadius: 2,
          backgroundColor: '#51074d',
          padding: '3px 16px',
          fontSize: '15px',
          fontWeight: '700',
          margin: '15px auto',
          display: 'block',
          '&:hover': {
            backgroundColor: '#86067f',
          },
        }}
      >
        Finalizar Compra
      </Button>
    </Box>
  );
};
