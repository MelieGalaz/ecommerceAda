import React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { CarritoContext } from '../context/CarritoContex';
import { Typography } from '@mui/material';
import { ContadorProducto } from './ContadorProducto';
import fondoCardCarrito from '../assets/fondoCardCarrito.avif';

export const Carrito = ({ state, toggleDrawer }) => {
  const { carrito, EliminarUnProducto } = useContext(CarritoContext);
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="right"
      open={state.right}
      onClose={toggleDrawer('right', false)}
      aria-hidden={!state.right}
    >
      <Box
        sx={{
          width: 300,
          height: '100%',
          backgroundColor: '#51074d',
        }}
        role="presentation"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
      >
        {carrito.length === 0 ? (
          <Typography>No hay productos en el carrito</Typography>
        ) : (
          carrito.map((producto) => (
            <Box
              key={producto.id}
              sx={{
                padding: 2,
                backgroundImage: `url(${fondoCardCarrito})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                margin: '10px ',
                borderRadius: '8px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
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
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white' }}>
                    {producto.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: 'center', color: 'white' }}
                  >
                    Precio: $ {producto.precio}
                  </Typography>
                  <ContadorProducto key={producto.id} producto={producto} />
                  <Button
                    onClick={() => EliminarUnProducto(producto)}
                    sx={{
                      color: 'white',
                      borderRadius: 5,
                      backgroundColor: '#691b76',
                      padding: '3px 10px',
                      fontSize: '13px',
                    }}
                  >
                    Eliminar
                  </Button>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>
      {carrito.length > 0 && (
        <Button onClick={() => navigate('Login')}>Comprar</Button>
      )}
    </Drawer>
  );
};
