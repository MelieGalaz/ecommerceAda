import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiCartDownload } from 'react-icons/bi';
import { HiShoppingCart } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { useState, useContext } from 'react';
import fondoNav from '../assets/fondo1.jpg';
import { Carrito } from './Carrito';
import { CarritoContext } from '../context/CarritoContex';
import { FirebaseContext } from '../context/FirebaseContext';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

const pages = ['Inicio', 'Productos'];
const settings = ['Historial', 'Salir'];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { cantidad } = useContext(CarritoContext);
  const { user, cambiarRutasLogin } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [state, setState] = useState({
    right: false,
  });

  const handleMenuItemClick = (setting) => {
    switch (setting) {
      case 'Historial':
        navigate('/OrdenesHistorial');
        break;
      case 'Salir':
        cerrarSesion();
        break;
      default:
        navigate('/');
    }
    handleCloseUserMenu();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const cerrarSesion = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        cambiarRutasLogin('/', false);
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const handleNavMenuItemClick = (page) => {
    navigate(page === 'Inicio' ? '/' : `/${page}`);
    handleCloseNavMenu();
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: `url(${fondoNav})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container sx={{ maxWidth: '1200px' }}>
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', mr: 2 }}>
            {isMobile && (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleOpenNavMenu}
                >
                  <GiHamburgerMenu style={{ fontSize: '24px' }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={() => handleNavMenuItemClick(page)}
                    >
                      <Typography
                        textAlign="center"
                        sx={{ fontWeight: 700, fontFamily: 'Spectral' }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Satisfy',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                MGJoyas
              </Typography>
            )}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'flex-start',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Satisfy',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                MGJoyas
              </Typography>

              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => navigate(page === 'Inicio' ? '/' : `/${page}`)}
                  sx={{
                    color: 'white',
                    display: 'block',
                    fontFamily: 'Spectral',
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <Box sx={{ display: 'flex', position: 'relative' }}>
              <Tooltip title="El carrito se vaciará en 24hs">
                <div>
                  <HiShoppingCart
                    style={{ fontSize: '30px', marginTop: '12px' }}
                    onClick={toggleDrawer('right', true)}
                  />
                </div>
              </Tooltip>
              {cantidad > 0 && (
                <span
                  style={{
                    color: 'white',
                    textShadow: '6px 6px 12px rgba(0, 0, 0, 0.9)',
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    backgroundColor: 'rgb(156 27 238)',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginTop: '11px',
                    fontFamily: 'Spectral',
                  }}
                >
                  {cantidad}
                </span>
              )}
            </Box>
            <Carrito state={state} toggleDrawer={toggleDrawer} />

            <Tooltip title="usuario">
              <div>
                {user ? (
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, display: 'flex', flexDirection: 'column' }}
                  >
                    <FaUser style={{ fontSize: '23px', color: 'white' }} />
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: 10,
                        textAlign: 'center',
                        fontFamily: 'Spectral',
                      }}
                    >
                      {user.username}
                    </Typography>
                  </Button>
                ) : (
                  <Button
                    onClick={() => cambiarRutasLogin('/Login', true)}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '0',
                      fontFamily: 'Spectral',
                    }}
                  >
                    <FaUser style={{ fontSize: '23px', color: 'white' }} />
                    <Typography
                      sx={{
                        color: 'white',
                        fontSize: 10,
                        textAlign: 'center',
                        fontFamily: 'Spectral',
                      }}
                    >
                      Iniciar Sesión
                    </Typography>
                  </Button>
                )}
              </div>
            </Tooltip>
          </Box>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleMenuItemClick(setting)}
              >
                <Typography
                  textAlign="center"
                  sx={{ fontWeight: 700, fontFamily: 'Spectral' }}
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
