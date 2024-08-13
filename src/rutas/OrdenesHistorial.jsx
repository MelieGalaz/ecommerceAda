import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Box, Typography } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
export const OrdenesHistorial = () => {
  const { user } = useContext(FirebaseContext);
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <IoMdClose style={{ color: 'white' }} onClick={() => navigate('/')} />
        {user?.orders?.map((order, index) => (
          <Box sx={{ border: 'white 2px solid' }} key={index}>
            <Typography sx={{ color: 'white' }}>{order.total}</Typography>
            {order?.carrito?.map((item, index) => (
              <Box key={index}>
                <Typography sx={{ color: 'white' }}>
                  {item.descripcion}
                </Typography>
                <Typography sx={{ color: 'white' }}>{item.cantidad}</Typography>
                <Typography sx={{ color: 'white' }}>{item.nombre}</Typography>
                <Typography sx={{ color: 'white' }}>{item.precio}</Typography>
                <img
                  style={{ width: '300px' }}
                  src={item.image}
                  alt={item.nombre}
                />
                {/* <Typography sx={{color:'white'}}>{order.fecha}</Typography>  */}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};
