import { Box, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { CarritoContext } from '../context/CarritoContex';
export const ContadorProducto = ({ producto }) => {
  const { sumarCantidad } = useContext(CarritoContext);
  const handleSumar = () => {
    sumarCantidad(producto.id);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton sx={{ color: 'white' }}>
        <AiOutlineMinus />
      </IconButton>

      <Typography sx={{ color: 'white' }}>
        {producto && producto.cantidad ? producto.cantidad.toString() : '0'}
      </Typography>
      <IconButton onClick={handleSumar} sx={{ color: 'white' }}>
        <IoMdAdd />
      </IconButton>
    </Box>
  );
};
