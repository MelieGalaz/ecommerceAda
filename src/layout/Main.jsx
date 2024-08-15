import { CardContenedor } from '../componentes/CardContenedor';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../rutas/Login';
import { Registrar } from '../rutas/Registrar';
import { NotFound } from '../rutas/404';
import { CardDetalle } from '../rutas/CardDetalle';
import { Checkout } from '../rutas/Checkout';
import { useContext } from 'react';
import { FirebaseContext } from '../context/FirebaseContext';
import { Agradecimiento } from '../rutas/Agradecimiento';
import { OrdenesHistorial } from '../rutas/OrdenesHistorial';
import { Inicio } from '../rutas/Inicio';

export const Main = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Productos" element={<CardContenedor />} />
      <Route path="Login" element={<Login />} />
      <Route path="Agradecimiento" element={<Agradecimiento />} />
      <Route path="Registrar" element={<Registrar />} />
      <Route path="CardDetalle/:id" element={<CardDetalle />} />
      <Route
        path="Checkout"
        element={user ? <Checkout /> : <Navigate to="/Login" />}
      />
      <Route path="OrdenesHistorial" element={<OrdenesHistorial />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
