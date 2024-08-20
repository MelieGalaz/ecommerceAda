import { useContext, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContex';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';
import fondoCheck from '../assets/fondoCheck.webp';
export const Checkout = () => {
  const { carrito, calcularSubTotal, subtotal, eliminarTodo } =
    useContext(CarritoContext);
  const { finalizarCompra, setModal } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    finalizarCompra(carrito, subtotal);
    setModal(1);
    localStorage.setItem('modal', 1);
    eliminarTodo();
    navigate('/Agradecimiento');
  };
  useEffect(() => {
    if (carrito.length === 0) {
      navigate('/');
    }
  }, [carrito, navigate]);
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
            fontFamily: 'Spectral',
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
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 800,
          color: '#5c07a6',
          fontFamily: 'Spectral',
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
          <Typography
            sx={{ fontWeight: 800, fontSize: 20, fontFamily: 'Spectral' }}
          >
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
              <Typography sx={{ fontWeight: 800, fontFamily: 'Spectral' }}>
                Cantidad
              </Typography>
              <Typography sx={{ fontFamily: 'Spectral' }}>
                {producto.cantidad}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 800, fontFamily: 'Spectral' }}>
                Precio
              </Typography>
              <Typography sx={{ fontFamily: 'Spectral' }}>
                ${producto.precio}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 800, fontFamily: 'Spectral' }}>
                Subtotal
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontFamily: 'Spectral',
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
          fontWeight: 800,
          fontFamily: 'Spectral',
        }}
      >
        Total: $ {subtotal}
      </Typography>
      <Button
        onClick={handleFinalizarCompra}
        sx={{
          color: 'white',
          borderRadius: 2,
          backgroundColor: '#51074d',
          padding: '3px 16px',
          fontFamily: 'Spectral',
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
