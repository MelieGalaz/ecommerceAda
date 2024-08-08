import AppBar from '@mui/material/AppBar';
import { Typography, Container } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import fondoNav from '../assets/fondonav.avif';
export const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        width: '100%',
        textAlign: 'center',
        backgroundImage: `url(${fondoNav})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography variant="subtitle1" color="white" component="div">
        COPYRIGHT
      </Typography>
      <Container>
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </Container>
    </AppBar>
  );
};
