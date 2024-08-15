// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import InputBase from '@mui/material/InputBase';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import { styled, alpha } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { BiCartDownload } from 'react-icons/bi';
// import { IoIosSearch } from 'react-icons/io';
// import { FaUser } from 'react-icons/fa';
// import { useState } from 'react';
// import fondoNav from '../assets/fondonav.avif';
// import { Carrito } from './Carrito';
// import { CarritoContext } from '../context/CarritoContex';
// import { FirebaseContext } from '../context/FirebaseContext';
// import { getAuth, signOut } from 'firebase/auth';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TbLogout } from 'react-icons/tb';
// const pages = ['Productos', 'home'];
// const settings = ['Historial', 'salir'];

// export const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
//   const { cantidad } = useContext(CarritoContext);
//   const { user } = useContext(FirebaseContext);

//   const [state, setState] = useState({
//     right: false,
//   });
//   const navigate = useNavigate();

//   const handleMenuItemClick = (page) => {
//     switch (page) {
//       case 'Iniciar Sesión':
//         navigate('/Login');
//         break;
//       case 'Historial':
//         navigate('/OrdenesHistorial');
//         break;

//       case 'salir':
//         cerrarSesion();

//         console.log('Logging out...');
//         break;
//       default:
//         navigate('/'); // Navegar a la página principal por defecto
//     }
//     handleCloseUserMenu(); // Cierra el menú después de la selección
//   };
//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setState({ ...state, [anchor]: open });
//   };

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));
//   const cerrarSesion = () => {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         navigate('/');
//         console.log('hola');
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//       });
//   };
//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: 'transparent',

//         backgroundImage: `url(${fondoNav})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'bottom',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <Container sx={{ maxWidth: '1200px' }}>
//         <Toolbar disableGutters>
//           <Typography
//             variant="h5"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             BOUTIQUE
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box
//             sx={{
//               flexGrow: 0,
//               display: 'flex',
//               alignItems: 'center',
//               gap: '5px',
//             }}
//           >
//             <Box sx={{ display: 'flex' }}>
//               <BiCartDownload
//                 style={{ fontSize: '30px' }}
//                 onClick={toggleDrawer('right', true)}
//               />
//               <span
//                 style={{
//                   color: '#e6a2f6',
//                   textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
//                 }}
//               >
//                 {cantidad > 0 ? cantidad : ''}
//               </span>
//             </Box>
//             <Carrito state={state} toggleDrawer={toggleDrawer} />
//             <Tooltip title="Open settings">
//               {user ? (
//                 <Button
//                   onClick={handleOpenUserMenu}
//                   sx={{ p: 0, display: 'flex', flexDirection: 'column' }}
//                 >
//                   <FaUser style={{ fontSize: '23px', color: 'white' }} />
//                   <Typography
//                     sx={{ color: 'white', fontSize: 10, textAlign: 'center' }}
//                   >
//                     {user.username}
//                   </Typography>
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={() => navigate('/Login')}
//                   sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     padding: '0',
//                   }}
//                 >
//                   <FaUser style={{ fontSize: '23px', color: 'white' }} />
//                   <Typography
//                     sx={{ color: 'white', fontSize: 10, textAlign: 'center' }}
//                   >
//                     Iniciar Sesión
//                   </Typography>
//                 </Button>
//               )}
//             </Tooltip>
// <Menu
//   sx={{ mt: '45px' }}
//   id="menu-appbar"
//   anchorEl={anchorElUser}
//   anchorOrigin={{
//     vertical: 'top',
//     horizontal: 'right',
//   }}
//   keepMounted
//   transformOrigin={{
//     vertical: 'top',
//     horizontal: 'right',
//   }}
//   open={Boolean(anchorElUser)}
//   onClose={handleCloseUserMenu}
// >
//   {settings.map((setting) => (
//     <MenuItem
//       key={setting}
//       onClick={() => handleMenuItemClick(setting)}
//     >
//       <Typography textAlign="center">{setting}</Typography>
//     </MenuItem>
//   ))}
// </Menu>
//             {/* <Tooltip title="Cerrar Sesión">
//               <Box>
//                 <Button sx={{ p: 0 }} onClick={cerrarSesion}>
//                   <TbLogout style={{ fontSize: '27px', color: '#ae39b1' }} />
//                 </Button>
//               </Box>
//             </Tooltip> */}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
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
import { FaUser } from 'react-icons/fa';
import { useState, useContext } from 'react';
import fondoNav from '../assets/fondonav.avif';
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
  const { user } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Changed 'sx' to 'sm'

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
        navigate('/'); // Navegar a la página principal por defecto
    }
    handleCloseUserMenu(); // Cierra el menú después de la selección
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
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  // const handleLogin = () => {
  //   navigate('/login'); // Navegar a la página de login
  // };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: `url(${fondoNav})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
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
                      onClick={() =>
                        navigate(page === 'Inicio' ? '/' : `/${page}`)
                      }
                    >
                      <Typography textAlign="center">{page}</Typography>
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
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                BOUTIQUE
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
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                BOUTIQUE
              </Typography>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => navigate(`/${page}`)}
                  sx={{ color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))} */}
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => navigate(page === 'Inicio' ? '/' : `/${page}`)}
                  sx={{ color: 'white', display: 'block' }}
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
            <Box sx={{ display: 'flex' }}>
              <BiCartDownload
                style={{ fontSize: '30px' }}
                onClick={toggleDrawer('right', true)}
              />
              <span
                style={{
                  color: '#e6a2f6',
                  textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
                }}
              >
                {cantidad > 0 ? cantidad : ''}
              </span>
            </Box>
            <Carrito state={state} toggleDrawer={toggleDrawer} />

            <Tooltip title="Open settings">
              {user ? (
                <Button
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, display: 'flex', flexDirection: 'column' }}
                >
                  <FaUser style={{ fontSize: '23px', color: 'white' }} />
                  <Typography
                    sx={{ color: 'white', fontSize: 10, textAlign: 'center' }}
                  >
                    {user.username}
                  </Typography>
                </Button>
              ) : (
                <Button
                  onClick={() => navigate('/Login')}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0',
                  }}
                >
                  <FaUser style={{ fontSize: '23px', color: 'white' }} />
                  <Typography
                    sx={{ color: 'white', fontSize: 10, textAlign: 'center' }}
                  >
                    Iniciar Sesión
                  </Typography>
                </Button>
              )}
            </Tooltip>

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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
