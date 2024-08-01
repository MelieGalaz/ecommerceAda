import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { CarritoContext } from '../context/CarritoContex';
import { Typography } from '@mui/material';
import { ContadorProducto } from './ContadorProducto';

export const Carrito = ({ state, toggleDrawer }) => {
  const { carrito, EliminarUnProducto } = useContext(CarritoContext);
  const navigate = useNavigate();
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
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
            sx={{ padding: 2, borderBottom: '1px solid #ddd' }}
          >
            <img src={producto.image} alt={producto.nombre} width={'200px'} />
            <Typography variant="h6">{producto.nombre}</Typography>
            <Typography variant="body2">{producto.descripcion}</Typography>
            <Typography variant="body2">Precio: {producto.precio}</Typography>
            <Button onClick={() => EliminarUnProducto(producto)}>
              Eliminar
            </Button>
            <ContadorProducto key={producto.id} producto={producto} />
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
