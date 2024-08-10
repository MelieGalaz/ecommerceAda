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
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// const pages = ['Productos', 'home'];
// const settings = ['Iniciar Sesión', 'Historial', 'salir'];

// export const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);
//   const { cantidad } = useContext(CarritoContext);
//   const [state, setState] = useState({
//     right: false,
//   });
//   const navigate = useNavigate();

//   const handleMenuItemClick = (page) => {
//     switch (page) {
//       case 'Iniciar Sesión':
//         navigate('/Login');
//         break;
//       case 'Account':
//         navigate('/account');
//         break;
//       case 'Dashboard':
//         navigate('/dashboard');
//         break;
//       case 'Logout':
//         // Implementa la lógica de cierre de sesión aquí
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
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Button sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             BOUTIQUE
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <GiHamburgerMenu
//               style={{ fontSize: '25px' }}
//               onClick={handleOpenNavMenu}
//             />
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Button sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
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
//             <Search sx={{ display: 'flex', alignItems: 'center' }}>
//               <IoIosSearch style={{ fontSize: '30px' }} />
//               <StyledInputBase
//                 placeholder="Buscar…"
//                 inputProps={{ 'aria-label': 'buscar' }}
//               />
//             </Search>
//           </Box>

//           <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
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
//               <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
//                 <FaUser style={{ fontSize: 22, color: 'white' }} />
//               </Button>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem
//                   key={setting}
//                   onClick={() => handleMenuItemClick(setting)}
//                 >
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
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
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiCartDownload } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import fondoNav from '../assets/fondonav.avif';
import { Carrito } from './Carrito';
import { CarritoContext } from '../context/CarritoContex';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Productos', 'home'];
const settings = ['Iniciar Sesión', 'Historial', 'Salir'];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { cantidad } = useContext(CarritoContext);
  const [state, setState] = useState({
    right: false,
  });
  const navigate = useNavigate();

  const handleMenuItemClick = (setting) => {
    switch (setting) {
      case 'Iniciar Sesión':
        navigate('/Login');
        break;
      case 'Historial':
        navigate('/account');
        break;
      case 'Salir':
        // Implementa la lógica de cierre de sesión aquí
        console.log('Logging out...');
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

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOUTIQUE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <GiHamburgerMenu
              style={{ fontSize: '25px' }}
              onClick={handleOpenNavMenu}
            />
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOUTIQUE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Search sx={{ display: 'flex', alignItems: 'center' }}>
              <IoIosSearch style={{ fontSize: '30px' }} />
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'buscar' }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <BiCartDownload
                style={{ fontSize: '30px' }}
                onClick={toggleDrawer('right', true)}
              />
              <span
                style={{
                  color: 'white',
                  textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
                }}
              >
                {cantidad > 0 ? cantidad : ''}
              </span>
            </Box>
            <Carrito state={state} toggleDrawer={toggleDrawer} />
            <Tooltip title="Open settings">
              <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <FaUser style={{ fontSize: 22, color: 'white' }} />
              </Button>
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
