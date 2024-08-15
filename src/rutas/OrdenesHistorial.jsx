import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Box, Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router';
import fondoCheck from '../assets/fondoCheck.webp';
export const OrdenesHistorial = () => {
  const { user } = useContext(FirebaseContext);
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white',
          margin: { xs: '10px', sm: '20px auto' },
          padding: '10px',
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'column',

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
          <Button
            onClick={() => navigate('/')}
            sx={{
              color: '#51074d',
              width: 'auto',
              fontWeight: 700,
              fontSize: 12,
              display: 'inline-block',
              '&:hover': {
                color: '#86067f',
              },
            }}
          >
            Regresar
          </Button>
        </Box>
        {user?.orders?.map((order, index) => (
          <Box
            key={index}
            sx={{
              borderBottom: '2px solid black',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {order?.carrito?.map((item, index) => (
              <Box key={index}>
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: 25,
                    fontWeight: 700,
                    paddingBlock: '10px',
                  }}
                >
                  {item.nombre}
                </Typography>
                {/* <Typography sx={{ textAlign: 'center', paddingBottom: '10px' }}>
                  {item.descripcion}
                </Typography> */}
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                  <img
                    width={'80px'}
                    style={{
                      borderRadius: 50,
                      border: '5px solid #51074d',
                    }}
                    src={item.image}
                    alt={item.nombre}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>Cantidad</Typography>
                    <Typography sx={{ textAlign: 'center' }}>
                      {item.cantidad}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700 }}>Precio</Typography>
                    <Typography sx={{ textAlign: 'center' }}>
                      {item.precio}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
            <Box
              sx={{
                display: 'flex',
                marginBlock: '10px',
                justifyContent: 'center',
                gap: 4,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography sx={{ textAlign: 'center', fontWeight: 700 }}>
                  Fecha de compra
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                  {order.fecha}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography sx={{ textAlign: 'center', fontWeight: 700 }}>
                  Total de la compra realizada
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                  ${order.total}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
