import React from 'react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import * as yup from 'yup';
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';
import { CarritoContext } from '../context/CarritoContex';
import fondoCheck from '../assets/fondoCheck.webp';
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const Login = () => {
  const { setUser, cambiarRutasLogin, loginRuta } = useContext(FirebaseContext);
  const { carrito } = useContext(CarritoContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const [typePassword, setTypePassword] = useState('password');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setUser(null);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const loggedInUser = userCredential.user;

        setUser({
          id: loggedInUser.uid,
          email: loggedInUser.email,
        });

        if (
          (loginRuta && carrito.length === 0) ||
          (!loginRuta && carrito.length === 0)
        ) {
          navigate('/');
        } else if (loginRuta && carrito.length !== 0) {
          navigate('/Productos');
        } else if (!loginRuta && carrito.length !== 0) {
          navigate('/Checkout');
        }
      } catch (error) {
        console.error('Error during login:', error.code, error.message);
      }
    },
  });

  const handleEmailChange = (event) => {
    setUser(null);
    formik.handleChange(event);
  };

  return (
    <Box
      as="form"
      onSubmit={formik.handleSubmit}
      sx={{
        backgroundColor: 'white',
        margin: { xs: '20px', sm: '20px auto' },
        padding: '15px',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: { sx: 0, sm: '100%' },
        maxWidth: 700,
        borderWidth: '10px',
        borderStyle: 'solid',
        borderImage: `url(${fondoCheck}) 10`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Button
          onClick={() => cambiarRutasLogin('/', false)}
          sx={{
            color: '#51074d',
            width: 'auto',
            fontWeight: 700,
            fontSize: 12,
            display: 'inline-block',
            fontFamily: 'Spectral',
            '&:hover': {
              color: '#86067f',
            },
          }}
        >
          Regresar
        </Button>
      </Box>
      <Typography
        style={{
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 800,
          color: '#66129b',
          fontFamily: 'Spectral',
        }}
      >
        Inicia Sesión
      </Typography>
      <Typography
        sx={{
          fontSize: 17,
          color: '#66129b',
          fontFamily: 'Spectral',
          fontWeight: 800,
        }}
      >
        Correo
      </Typography>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={handleEmailChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        autoComplete="email"
      />
      <Typography
        sx={{
          fontSize: 17,
          color: '#66129b',
          fontFamily: 'Spectral',
          fontWeight: 800,
        }}
      >
        Contraseña
      </Typography>
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        autoComplete="current-password"
        type={typePassword}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() =>
                  setTypePassword(
                    typePassword === 'password' ? 'text' : 'password'
                  )
                }
                edge="end"
              >
                {typePassword === 'password' ? <IoEyeSharp /> : <FaEyeSlash />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        type="submit"
        sx={{
          color: 'white',
          borderRadius: 2,
          backgroundColor: '#691b76',
          padding: '3px 15px',
          fontSize: '13px',
          fontFamily: 'Spectral',
          margin: 'auto',
          '&:hover': {
            backgroundColor: '#9b12a6',
          },
        }}
      >
        Iniciar sesión
      </Button>
      <Typography sx={{ fontFamily: 'Spectral', fontWeight: 800 }}>
        Si no tienes cuenta,
        <Button
          onClick={() => navigate('/Registrar')}
          sx={{
            color: '#66129b',
            fontWeight: 700,
            fontFamily: 'Spectral',
            '&:hover': {
              color: '#9b12a6',
            },
          }}
        >
          REGISTRATE
        </Button>
      </Typography>
    </Box>
  );
};
