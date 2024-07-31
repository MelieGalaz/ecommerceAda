import React from 'react';
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Card = () => {
  const { productos } = useContext(FirebaseContext);
  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginBlock: '20px',
      }}
    >
      {productos?.map((producto) => (
        <Box
          key={producto.id}
          sx={{
            width: 300,
            border: '2px solid black',
            padding: 0,
          }}
        >
          <img
            src={producto.image}
            alt={producto.name}
            style={{ width: '100%' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography>{producto.nombre}</Typography>
            <Typography sx={{ textAlign: 'center' }}>
              {producto.descripcion}
            </Typography>
            <Typography>{producto.precio}</Typography>
          </Box>
          <Link to={`CardDetalle/${producto.id}`}>ver más</Link>
          <Button>Añadir al carrito</Button>
        </Box>
      ))}
    </Container>
  );
};
