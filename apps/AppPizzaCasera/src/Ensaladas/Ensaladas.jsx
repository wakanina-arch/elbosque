import React from 'react';
import MenuFilmReel from '../components/MenuFilmReel';
import menuData from '../data/menuData.json';

export default function Ensaladas() {
  return <MenuFilmReel items={menuData.ensaladas} titulo="Elige tu Ensalada" />;
}
