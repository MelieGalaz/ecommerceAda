import { useState } from 'react';
import { Card } from './Card';
import { Carrusel } from './Carrusel';
import { Filtros } from './Filtros';

export const CardContenedor = () => {
  const [filtro, setFiltro] = useState('');
  return (
    <>
      <Filtros setFiltro={setFiltro} />

      <Card filtro={filtro} />
    </>
  );
};
