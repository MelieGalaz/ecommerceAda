import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Container,
  Typography,
  InputAdornment,
  IconButton,
  Box,
} from '@mui/material';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import fondoCheck from '../assets/fondoCheck.webp';

const validationSchema = yup.object({
  nombre: yup.string('Enter your name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const Registrar = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [typePassword, setTypePassword] = useState('password');
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      password: '',
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        const user = {
          username: values.nombre,
          mail: values.email,
          orders: [],
          cart: [],
          id: userCredential.user.uid,
        };
        await setDoc(doc(db, 'users', user.id), user);
        console.log(user);
        navigate('/Login');
      } catch (error) {
        console.error('Error during registration: ', error.code, error.message);
      }
    },
  });

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
          justifyContent: 'flex-start', // Alinea a la izquierda
        }}
      >
        <Button
          onClick={() => navigate('/')}
          sx={{
            color: '#51074d',
            width: 'auto',
            fontWeight: 700,
            fontSize: 12,
            display: 'inline-block',
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
          fontWeight: 700,
          color: '#66129b',
        }}
      >
        Registrate
      </Typography>
      <Typography
        sx={{
          fontSize: 17,
          color: '#66129b',
        }}
      >
        Nombre
      </Typography>
      <TextField
        fullWidth
        id="nombre"
        name="nombre"
        label="Nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
        helperText={formik.touched.nombre && formik.errors.nombre}
        autoComplete="name" // Agregado para el campo de nombre
      />
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
        id="emailRegistro"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
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
        id="passwordRegistro"
        name="password"
        label="Password"
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
        autoComplete="new-password" // Agregado para el campo de password
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
        Registrarse
      </Button>
      <Typography>
        Si ya tienes cuenta,
        <Button
          onClick={() => navigate('/Login')}
          sx={{
            color: '#66129b',
            fontWeight: 700,
            '&:hover': {
              color: '#9b12a6',
            },
          }}
        >
          inicia sesión
        </Button>
      </Typography>
    </Box>
  );
};
