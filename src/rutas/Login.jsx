import React from 'react';
import { useFormik } from 'formik';
import { useContext } from 'react';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Container,
  InputAdornment,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FirebaseContext } from '../context/FirebaseContext';

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
  const { user, setUser } = useContext(FirebaseContext);
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

        navigate('/Checkout');
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
      }}
    >
      <IoMdClose onClick={() => navigate('/')} className="icon-close" />
      <Typography
        style={{
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 700,
          color: '#66129b',
        }}
      >
        Inicia Sesión
      </Typography>
      <Typography
        sx={{
          fontSize: 17,
          color: '#66129b',
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
        autoComplete="email" // Agregado para el campo de email
      />
      <Typography
        sx={{
          fontSize: 17,
          color: '#66129b',
        }}
      >
        Contraseña
      </Typography>
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        autoComplete="current-password" // Ya estaba agregado
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
          margin: 'auto',
          '&:hover': {
            backgroundColor: '#9b12a6',
          },
        }}
      >
        Iniciar sesión
      </Button>
      <Typography>
        Si no tienes cuenta,
        <Button
          onClick={() => navigate('/Registrar')}
          sx={{
            color: '#66129b',
            fontWeight: 700,
            '&:hover': {
              color: '#9b12a6',
            },
          }}
        >
          REGISTRATE
        </Button>
      </Typography>
      <div>
        <h2>Welcome, {user?.username}</h2>
      </div>
    </Box>
  );
};
