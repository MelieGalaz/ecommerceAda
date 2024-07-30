import React from 'react';
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Container, Typography } from '@mui/material';

export const Card = () => {
  const { productos } = useContext(FirebaseContext);
  return (
    <Container>
      {productos?.map((producto) => (
        <Container key={producto.id}>
          <Typography>{producto.id}</Typography>
          <Typography>{producto.descripcion}</Typography>
          <Typography>{producto.nombre}</Typography>
          <Typography>{producto.precio}</Typography>
        </Container>
      ))}
    </Container>
  );
};
