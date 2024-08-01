import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';

import { CarritoContext } from '../context/CarritoContex';
export const ContadorProducto = ({ producto }) => {
  const { sumarCantidad } = useContext(CarritoContext);
  const handleSumar = () => {
    sumarCantidad(producto.id);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button>-</Button>
      <Typography>
        {producto && producto.cantidad ? producto.cantidad.toString() : '0'}
      </Typography>
      <Button onClick={handleSumar}>+</Button>
    </Box>
  );
};
