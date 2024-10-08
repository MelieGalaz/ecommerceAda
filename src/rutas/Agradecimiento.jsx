import { Box, Button, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';
import fondoCheck from '../assets/fondoCheck.webp';
export const Agradecimiento = () => {
  const { modal, setModal } = useContext(FirebaseContext);
  const navigate = useNavigate();

  useEffect(() => {
    const storedModal = localStorage.getItem('modal');
    if (storedModal) {
      setModal(Number(storedModal));
    }
  }, []);
  return (
    <>
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
          borderWidth: '10px',
          borderStyle: 'solid',
          borderImage: `url(${fondoCheck}) 10`,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Button
              onClick={() => navigate('/')}
              sx={{
                color: '#51074d',
                width: 'auto',
                fontWeight: 700,
                fontFamily: 'Spectral',
                fontSize: 12,
                display: 'inline-block',
                '&:hover': {
                  color: '#86067f',
                },
              }}
            >
              {modal === 0 && 'Aceptar'}
              {modal === 1 && 'Regresar'}
            </Button>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: 24,
            textAlign: 'center',
            fontWeight: 700,
            color: '#5c07a6',
            fontFamily: 'Spectral',
          }}
        >
          {modal === 0 && 'Se ha registrado correctamente'}
          {modal === 1 && 'GRACIAS POR SU COMPRA!!'}
        </Typography>
        {modal === 1 && (
          <>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 500,
                fontFamily: 'Spectral',
              }}
            >
              Su pedido llegará en 48hs
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 500,
                fontFamily: 'Spectral',
              }}
            >
              Aproveche nuestras promociones
            </Typography>
          </>
        )}
      </Box>
    </>
  );
};
