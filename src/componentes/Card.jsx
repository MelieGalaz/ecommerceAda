import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';

import { Box, Container, Typography, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import fondoCardCarrito from '../assets/fondoCardCarrito.avif';

export const Card = ({ filtro }) => {
  const { productos } = useContext(FirebaseContext);

  const [hoveredLink, setHoveredLink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productos.length > 0) {
      setLoading(false);
    }
  }, [productos]);

  const handleMouseEnter = (id) => {
    setHoveredLink(id);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const productosFiltrados = filtro
    ? productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(filtro.toLowerCase())
      )
    : productos;

  return (
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        margin: '20px auto',
      }}
    >
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
      ) : productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => (
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
              alt={producto.nombre}
              style={{ width: '100%', borderRadius: '20px' }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Kurale',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                {producto.nombre}
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: 'Spectral',
                }}
              >
                {producto.descripcion}
              </Typography>
              <Typography sx={{ color: 'white', fontFamily: 'Spectral' }}>
                ${producto.precio}
              </Typography>
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
                to={`/CardDetalle/${producto.id}`}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'Spectral',
                  color: hoveredLink === producto.id ? '#7d2de8' : 'white',
                }}
                onMouseEnter={() => handleMouseEnter(producto.id)}
                onMouseLeave={handleMouseLeave}
              >
                ver más
              </Link>
            </Box>
          </Box>
        ))
      ) : (
        <Typography sx={{ fontFamily: 'Spectral' }}>
          No se encontraron productos
        </Typography>
      )}
    </Container>
  );
};
