import { Box, Typography } from '@mui/material';
import sirena from '../assets/sirena.png';
export const NotFound = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',

        margin: { xs: '20px', sm: '20px auto' },
        padding: '10px',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: { sx: 0, sm: '100%' },
        maxWidth: 800,
        borderWidth: '5px',
        borderStyle: 'solid ',
        borderColor: '#ba6969',
      }}
    >
      <Typography
        sx={{
          color: 'red',
          textAlign: 'center',
          fontFamily: 'Spectral',
          fontSize: { sx: 20, sm: 22 },
        }}
      >
        No se ha encontrado la página solicitada
      </Typography>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <img
          src={sirena}
          alt="tarjeta"
          style={{ whiteSpace: '100%', height: '50px' }}
        />
      </Box>
    </Box>
  );
};
