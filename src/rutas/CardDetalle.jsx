import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';
import { CarritoContext } from '../context/CarritoContex';
import { Box, Button, Typography } from '@mui/material';
import fondoCardCarrito from '../assets/fondoCardCarrito.avif';

export const CardDetalle = () => {
  const { id } = useParams();
  const { productos } = useContext(FirebaseContext);
  const { agregarAlCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();
  const producto = productos.find((producto) => producto.id === id);

  return (
    <div>
      {producto ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: { xs: 350, md: 800 },
            height: { md: 400 },
            margin: '20px auto',
            padding: '20px',
            borderRadius: '20px',
            backgroundImage: `url(${fondoCardCarrito})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 4px 9px rgba(0, 0, 0, 0.76)',
          }}
        >
          <img
            src={producto.image}
            alt={producto.name}
            style={{
              maxWidth: '320px',
              height: 'auto',
              borderRadius: '10px',
              marginBottom: { xs: '20px', md: '0' },
              marginRight: { md: '20px' },
            }}
          />
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Button onClick={() => navigate('/')}>volver</Button>
            <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
              Detalles del producto
            </Typography>
            <Typography variant="h5" sx={{ mb: 1, color: 'white' }}>
              {producto.nombre}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, color: 'white' }}>
              {producto.descripcion}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'white' }}>
              Precio: ${producto.precio}
            </Typography>
            <Button
              onClick={() => agregarAlCarrito(producto)}
              sx={{
                alignSelf: 'center',
                maxWidth: '200px',
                width: 'auto',
                color: 'white',
                borderRadius: 5,
                backgroundColor: '#691b76',
              }}
            >
              Agregar al carrito
            </Button>
          </Box>
        </Box>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};
