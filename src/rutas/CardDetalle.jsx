import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/FirebaseContext';
import { CarritoContext } from '../context/CarritoContex';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import fondoCardCarrito from '../assets/fondoCardCarrito.avif';

export const CardDetalle = () => {
  const { id } = useParams();
  const { productos } = useContext(FirebaseContext);
  const { agregarAlCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const producto = productos.find((producto) => producto.id === id);

  useEffect(() => {
    if (producto) {
      setLoading(false);
    }
  }, [producto]);

  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            minHeight: '50vh',
          }}
        >
          <CircularProgress sx={{ color: '#66129b' }} />
        </Box>
      ) : producto ? (
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
            alt={producto.nombre}
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
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                onClick={() => navigate('/Productos')}
                sx={{
                  color: 'white',
                  width: 'auto',
                  fontWeight: 700,
                  fontSize: 12,
                  fontFamily: 'Spectral',
                  display: 'inline-block',
                  '&:hover': {
                    color: '#7d2de8',
                  },
                }}
              >
                Regresar
              </Button>
            </Box>

            <Typography
              variant="h6"
              sx={{ mb: 1, color: 'white', fontFamily: 'Spectral' }}
            >
              Detalles del producto
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 1, color: 'white', fontFamily: 'Spectral' }}
            >
              {producto.nombre}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 1, color: 'white', fontFamily: 'Spectral' }}
            >
              {producto.descripcion}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, color: 'white', fontFamily: 'Spectral' }}
            >
              Precio: ${producto.precio}
            </Typography>
            <Button
              onClick={() => agregarAlCarrito(producto)}
              sx={{
                alignSelf: 'center',
                maxWidth: '200px',
                width: 'auto',
                color: 'white',
                borderRadius: 2,
                backgroundColor: '#691b76',
                fontFamily: 'Spectral',
              }}
            >
              Agregar al carrito
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography
          variant="body1"
          sx={{ color: 'white', textAlign: 'center', fontFamily: 'Spectral' }}
        >
          Producto no encontrado
        </Typography>
      )}
    </div>
  );
};
