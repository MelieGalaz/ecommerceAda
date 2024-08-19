import { Typography, Container, Box, Button } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import fondo from '../assets/fondo1.jpg';
import visa from '../assets/visa.png';
import master from '../assets/masterCard.png';
import paypal from '../assets/paypal1.png';
import american from '../assets/american.png';

import { useNavigate } from 'react-router';
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container
      as="footer"
      position="static"
      sx={{
        minWidth: '100%',
        textAlign: 'center',
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box>
        <Typography
          sx={{
            color: 'white',
            width: 'auto',
            fontWeight: 700,
            fontSize: 15,
            textAlign: 'center',
          }}
        >
          Categorías
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '8px', sm: '15px' },
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() => navigate('/')}
            sx={{
              color: 'white',
              width: 'auto',
              fontWeight: 700,
              fontSize: 12,
              padding: 0,
              minWidth: 0,
              display: 'inline-block',
              '&:hover': {
                color: '#7d2de8',
              },
            }}
          >
            Inicio
          </Button>
          <Button
            onClick={() => navigate('/Productos')}
            sx={{
              color: 'white',
              width: 'auto',
              fontWeight: 700,
              fontSize: 12,
              padding: 0,
              minWidth: 0,
              display: 'inline-block',
              '&:hover': {
                color: '#7d2de8',
              },
            }}
          >
            Productos
          </Button>
          <Button
            onClick={() => navigate('/Login')}
            sx={{
              color: 'white',
              width: 'auto',
              fontWeight: 700,
              fontSize: 12,
              padding: 0,
              minWidth: 0,
              display: 'inline-block',
              '&:hover': {
                color: '#7d2de8',
              },
            }}
          >
            Iniciar Sesión
          </Button>
          <Button
            onClick={() => navigate('/Registrar')}
            sx={{
              color: 'white',
              width: 'auto',
              fontWeight: 700,
              fontSize: 12,
              padding: 0,
              minWidth: 0,
              display: 'inline-block',
              '&:hover': {
                color: '#7d2de8',
              },
            }}
          >
            Crear cuenta
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          width: '100%',
          maxWidth: '1000px',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            width: 'auto',
            fontWeight: 700,
            fontSize: 15,
            textAlign: 'center',
          }}
        >
          Formas de Pago
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '350px',

            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                color: 'white',
                width: 'auto',
                fontWeight: 700,
                fontSize: 12,
                textAlign: 'center',
              }}
            >
              Efectivo
            </Typography>
            <Typography
              sx={{
                color: 'white',
                width: 'auto',
                fontWeight: 700,
                fontSize: 12,
                textAlign: 'center',
              }}
            >
              Tranferencia Bancaria
            </Typography>
            <img
              src={paypal}
              alt=""
              style={{ whiteSpace: '100%', height: '30px' }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                color: 'white',
                width: 'auto',
                fontWeight: 700,
                fontSize: 12,
                textAlign: 'center',
              }}
            >
              Tarjetas de Credito
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={visa}
                alt=""
                style={{ whiteSpace: '100%', height: '30px' }}
              />
              <img
                src={master}
                alt=""
                style={{ whiteSpace: '100%', height: '33px' }}
              />
              <img
                src={american}
                alt=""
                style={{ whiteSpace: '100%', height: '50px' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          margin: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <a
          href="https://github.com/MelieGalaz"
          target="black"
          style={{ color: 'white', fontSize: 20 }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mely-galaz-9638bb246/"
          target="black"
          style={{ color: 'white', fontSize: 20 }}
        >
          <FaLinkedin />
        </a>
      </Box>

      <Typography variant="subtitle1" color="white" component="div">
        COPYRIGHT
      </Typography>
    </Container>
  );
};
