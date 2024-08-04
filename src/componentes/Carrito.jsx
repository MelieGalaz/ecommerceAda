import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { CarritoContext } from '../context/CarritoContex';
import { Typography } from '@mui/material';
import { ContadorProducto } from './ContadorProducto';

import fondocarCarrito from '../assets/fondocarCarrito.jpg';
import fondoCardCarrito from '../assets/fondoCardCarrito.avif';
export const Carrito = ({ state, toggleDrawer }) => {
  const { carrito, EliminarUnProducto } = useContext(CarritoContext);
  const navigate = useNavigate();

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300,
        height: '100%',
        backgroundColor: '#51074d',
        // backgroundImage: `url(${fondoCarrito})`, // Usa template literals para insertar la referencia de la imagen
        // backgroundSize: 'cover', // Ajusta estas propiedades según sea necesario
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
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
              backgroundImage: `url(${fondoCardCarrito})`, // Usa template literals para insertar la referencia de la imagen
              backgroundSize: 'cover', // Ajusta estas propiedades según sea necesario
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',

              // backdropFilter: 'blur(2px)', // Aplica el efecto de desenfoque
              // backgroundColor: 'rgba(255, 255, 255, 0.7)', // Ajusta el color de fondo para resaltar el efecto
              margin: '10px ', // Añade margen para separar visualmente los elementos
              borderRadius: '8px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: ' space-between',
                // Aplica el efecto de desenfoque
                // backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            {carrito.length > 0 && (
              <Button onClick={() => navigate('Login')}>Comprar</Button>
            )}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
