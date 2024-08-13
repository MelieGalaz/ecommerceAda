import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Box, Typography } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import fondoCheck from '../assets/fondoCheck.webp';
export const OrdenesHistorial = () => {
  const { user } = useContext(FirebaseContext);
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <IoMdClose onClick={() => navigate('/')} />
        {user?.orders?.map((order, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: 'white',

              margin: { xs: '10px', sm: '20px auto' },
              padding: '5px',
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
            <Typography>{order.total}</Typography>
            <Typography>{order.fecha}</Typography>
            {order?.carrito?.map((item, index) => (
              <Box key={index}>
                <Typography sx={{ color: 'white' }}>
                  {item.descripcion}
                </Typography>
                <Typography>{item.cantidad}</Typography>
                <Typography>{item.nombre}</Typography>
                <Typography>{item.precio}</Typography>
                <img
                  width={'80px'}
                  style={{
                    borderRadius: 50,
                    border: '5px solid #51074d',
                  }}
                  src={item.image}
                  alt={item.nombre}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};
