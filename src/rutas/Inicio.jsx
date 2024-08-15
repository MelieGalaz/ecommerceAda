import { Box, Typography } from '@mui/material';
import { Carrusel } from '../componentes/Carrusel';

export const Inicio = () => {
  return (
    <>
      <Box>
        <Typography sx={{ textAlign: 'center', fontSize: 23 }}>
          ¡Luce Radiante!
        </Typography>
      </Box>
      <Carrusel />
    </>
  );
};
