import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router';
import fondoCheck from '../assets/fondoCheck.webp';

export const OrdenesHistorial = () => {
  const { user } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.orders) {
      setLoading(false);
    }
  }, [user]);

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
              fontWeight: 800,
              fontFamily: 'Spectral',
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
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              minHeight: '50vh',
            }}
          >
            <CircularProgress sx={{ color: '#66129b' }} />
          </Box>
        ) : (
          user?.orders?.map((order, index) => (
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

                      paddingBlock: '10px',
                      fontWeight: 800,
                      fontFamily: 'Spectral',
                    }}
                  >
                    {item.nombre}
                  </Typography>
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
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontFamily: 'Spectral',
                          fontSize: 18,
                        }}
                      >
                        Cantidad
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: 'center',
                          fontWeight: 700,
                          fontFamily: 'Spectral',
                        }}
                      >
                        {item.cantidad}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontFamily: 'Spectral',
                          fontSize: 18,
                        }}
                      >
                        Precio
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: 'center',
                          fontWeight: 700,
                          fontFamily: 'Spectral',
                        }}
                      >
                        ${item.precio}
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
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontFamily: 'Spectral',
                      fontSize: 18,
                      textAlign: 'center',
                    }}
                  >
                    Fecha de compra
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontWeight: 800,
                      fontFamily: 'Spectral',
                    }}
                  >
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
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontFamily: 'Spectral',
                      fontSize: 18,
                      textAlign: 'center',
                    }}
                  >
                    Total de la compra realizada
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontWeight: 800,
                      fontFamily: 'Spectral',
                    }}
                  >
                    ${order.total}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>
    </>
  );
};
