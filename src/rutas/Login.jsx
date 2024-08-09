// import React from 'react';
// import { useFormik } from 'formik';
// import { useContext } from 'react';
// import * as yup from 'yup';
// import {
//   TextField,
//   Button,
//   Container,
//   InputAdornment,
//   IconButton,
//   Typography,
// } from '@mui/material';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { FaEyeSlash } from 'react-icons/fa6';
// import { IoEyeSharp } from 'react-icons/io5';
// import { IoMdClose } from 'react-icons/io';
// import { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { FirebaseContext } from '../context/FirebaseContext';
// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });
// export const Login = () => {
//   const { user, loginUser } = useContext(FirebaseContext);
//   const navigate = useNavigate();
//   const auth = getAuth();
//   const [typePassword, setTypePassword] = useState('password');
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const userCredential = await signInWithEmailAndPassword(
//           auth,
//           values.email,
//           values.password,
//           values.username
//         );

//         const user = userCredential.user;
//         console.log('User logged in:', user.password);
//       } catch (error) {
//         console.error('Error during login:', error.code, error.message);
//       }
//     },
//   });
//   return (
//     <Container as="form" onSubmit={formik.handleSubmit}>
//       <IoMdClose onClick={() => navigate('/')} />
//       <TextField
//         fullWidth
//         id="email"
//         name="email"
//         label="Email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.email && Boolean(formik.errors.email)}
//         helperText={formik.touched.email && formik.errors.email}
//       />

//       <TextField
//         fullWidth
//         id="password"
//         name="password"
//         label="Password"
//         type={typePassword}
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={formik.touched.password && Boolean(formik.errors.password)}
//         helperText={formik.touched.password && formik.errors.password}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={() =>
//                   setTypePassword(
//                     typePassword === 'password' ? 'text' : 'password'
//                   )
//                 }
//                 edge="end"
//               >
//                 {typePassword === 'password' ? <IoEyeSharp /> : <FaEyeSlash />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />

//       <Button color="primary" variant="contained" fullWidth type="submit">
//         Iniciar sesión
//       </Button>
//       <Typography>
//         Si no tienes cuenta,
//         <Button onClick={() => navigate('/Registrar')}>REGISTRATE</Button>
//       </Typography>
//       <h1>{user}</h1>
//     </Container>
//   );
// };
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

        // navigate('/');
      } catch (error) {
        console.error('Error during login:', error.code, error.message);
      }
    },
  });
  const handleEmailChange = (event) => {
    // Limpiar el usuario anterior al cambiar el campo de correo electrónico
    setUser(null);
    formik.handleChange(event);
  };
  return (
    <Container as="form" onSubmit={formik.handleSubmit}>
      <IoMdClose onClick={() => navigate('/')} />
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
      />

      <TextField
        fullWidth
        id="password"
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
      />

      <Button
        onClick={() => navigate('/CheckIn')}
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
      >
        Iniciar sesión
      </Button>
      <Typography>
        Si no tienes cuenta,
        <Button onClick={() => navigate('/Registrar')}>REGISTRATE</Button>
      </Typography>
      <div>
        <h2>Welcome, {user?.username}</h2>
        <p>Email: {user?.mail}</p>
        <p>id: {user?.id}</p>
      </div>
    </Container>
  );
};
