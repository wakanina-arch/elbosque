import React from 'react';
import MenuFilmReel from '../components/MenuFilmReel';
import menuData from '../data/menuData.json';

export default function Complementos() {
  return <MenuFilmReel items={menuData.complementos} titulo="Elige tu Complemento" />;
}
