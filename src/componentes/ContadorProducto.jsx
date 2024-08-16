import { Box, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { CarritoContext } from '../context/CarritoContex';
export const ContadorProducto = ({ producto }) => {
  const { sumarCantidad, restarCantidad } = useContext(CarritoContext);
  const handleSumar = () => {
    sumarCantidad(producto.id);
  };
  const handleRestar = () => {
    restarCantidad(producto.id);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#691b76',
        borderRadius: 2,
      }}
    >
      <IconButton onClick={handleRestar} sx={{ color: 'white' }}>
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
