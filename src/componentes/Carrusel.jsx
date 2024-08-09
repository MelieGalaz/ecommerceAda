import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

import joyas from '../assets/joyas.jpg';
import joyas4 from '../assets/joyas4.jpg';
import joyas3 from '../assets/joyas3.jpg';

export const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Oculta las flechas
    autoplay: true, // Reproduce automáticamente
    autoplaySpeed: 3000, // Velocidad de cambio de diapositiva
    fade: true, // Transición de desvanecimiento
    cssEase: 'ease-in-out',
  };

  return (
    <Box className="carrusel-container">
      <Slider {...settings}>
        <Box className="slide-item">
          <img src={joyas} alt="Carrito" />
          <Box
            className="slide-text"
            sx={{
              height: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{ fontSize: '1.5rem', fontWeight: 800, textAlign: 'center' }}
            >
              REBAJAS{' '}
              <span style={{ fontWeight: 'normal', fontSize: '1.2rem' }}>
                Hasta
              </span>{' '}
              -70%
            </Typography>
            <Typography variant="body1">Envío en 24 Horas </Typography>
          </Box>
        </Box>
        <Box className="slide-item">
          <img src={joyas3} alt="Card Carrito" />
          <Box className="slide-text">
            <Typography>Texto sobre la imagen 2</Typography>
            <Typography variant="body1">Descripción de la imagen 2</Typography>
          </Box>
        </Box>
        <Box className="slide-item">
          <img src={joyas4} alt="Carrito" />
          <Box className="slide-text">
            <Typography variant="h4">Texto sobre la imagen 3</Typography>
            <Typography variant="body1">Descripción de la imagen 3</Typography>
          </Box>
        </Box>
        {/* Agrega más elementos según sea necesario */}
      </Slider>
    </Box>
  );
};
