import { CardContenedor } from '../componentes/CardContenedor';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../rutas/Login';
import { Registrar } from '../rutas/Registrar';

export const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<CardContenedor />} />
      <Route path="Login" element={<Login />} />
      <Route path="Registrar" element={<Registrar />} />
    </Routes>
  );
};
