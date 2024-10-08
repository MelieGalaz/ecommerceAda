import React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { CarritoContext } from '../context/CarritoContex';
import { FirebaseContext } from '../context/FirebaseContext';
import { Typography } from '@mui/material';
import { ContadorProducto } from './ContadorProducto';
import fondoCardCarrito from '../assets/fondoCardCarrito.avif';
import { MdClose } from 'react-icons/md';

export const Carrito = ({ state, toggleDrawer }) => {
  const {
    carrito,
    EliminarUnProducto,
    calcularSubTotal,
    subtotal,
    eliminarTodo,
  } = useContext(CarritoContext);
  const { user } = useContext(FirebaseContext);
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
          backgroundColor: '#590287',
          overflowY: 'scroll',
        }}
        role="presentation"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
      >
        <MdClose
          onClick={toggleDrawer('right', false)}
          style={{ color: 'white', textAlign: 'center', fontSize: 25 }}
        />

        {carrito?.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ color: 'white', textAlign: 'center', fontFamily: 'Spectral' }}
          >
            No hay productos en el carrito
          </Typography>
        ) : (
          carrito?.map((producto) => (
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
                    gap: '5px',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: 'white', fontFamily: 'Spectral' }}
                  >
                    {producto.nombre}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: 'center',
                      color: 'white',
                      fontFamily: 'Spectral',
                    }}
                  >
                    Precio: $ {producto.precio}
                  </Typography>
                  <ContadorProducto key={producto.id} producto={producto} />
                  <Typography
                    sx={{
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 500,
                      fontFamily: 'Spectral',
                    }}
                  >
                    Subtotal: ${calcularSubTotal(producto)}
                  </Typography>
                  <Button
                    onClick={() => EliminarUnProducto(producto)}
                    sx={{
                      color: 'white',
                      borderRadius: 2,
                      fontFamily: 'Spectral',
                      padding: '3px 10px',
                      fontSize: '10px',
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
        <Box sx={{ backgroundColor: '#590287' }}>
          <Typography
            sx={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontFamily: 'Spectral',
            }}
          >
            Subtotal: $ {subtotal}
          </Typography>
          <Button
            sx={{
              color: 'white',
              borderRadius: 2,
              backgroundColor: '#cc97d4',
              padding: '3px 16px',
              fontSize: '15px',
              fontWeight: '700',
              margin: '15px auto',
              display: 'block',
              fontFamily: 'Spectral',
            }}
            onClick={
              user ? () => navigate('/Checkout') : () => navigate('/Login')
            }
          >
            Comprar
          </Button>
          <Button
            onClick={eliminarTodo}
            sx={{
              color: 'white',
              borderRadius: 2,
              padding: '3px 16px',
              fontSize: '10px',
              fontWeight: '700',
              margin: 'auto',
              display: 'block',
              fontFamily: 'Spectral',
              '&:hover': {
                color: '#cc97d4',
              },
            }}
          >
            Vaciar carrito
          </Button>
        </Box>
      )}
    </Drawer>
  );
};
