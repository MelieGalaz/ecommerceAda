import React from 'react';
import { useContext, useState } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { CarritoContext } from '../context/CarritoContex';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import fondoCardCarrito from '../assets/fondoCardCarrito.avif';

export const Card = () => {
  const { productos } = useContext(FirebaseContext);
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [hoveredLink, setHoveredLink] = useState(null);
  const handleMouseEnter = (id) => {
    setHoveredLink(id);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };
  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px',
      }}
    >
      {productos?.map((producto) => (
        <Box
          key={producto.id}
          sx={{
            width: 350,
            padding: '20px',
            borderRadius: '20px',
            backgroundImage: `url(${fondoCardCarrito})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 4px 9px rgb(0 0 0 / 76%);',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.04)',
            },
          }}
        >
          <img
            src={producto.image}
            alt={producto.name}
            style={{ width: '100%', borderRadius: '20px' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ color: 'white' }}>{producto.nombre}</Typography>

            <Typography sx={{ color: 'white' }}>${producto.precio}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Link
              to={`CardDetalle/${producto.id}`}
              style={{
                textDecoration: 'none',
                color: hoveredLink === producto.id ? '#691b76' : 'white',
              }}
              onMouseEnter={() => handleMouseEnter(producto.id)}
              onMouseLeave={handleMouseLeave}
            >
              ver más
            </Link>
            <Button
              onClick={() => agregarAlCarrito(producto)}
              sx={{
                color: 'white',
                borderRadius: 2,
                backgroundColor: '#691b76',
                padding: '3px 15px',
                fontSize: '13px',
              }}
            >
              agregar Al Carrito
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};
