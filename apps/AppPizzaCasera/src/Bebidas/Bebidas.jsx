import React from 'react';
import MenuFilmReel from '../components/MenuFilmReel';
import menuData from '../data/menuData.json';

export default function Bebidas() {
  return <MenuFilmReel items={menuData.bebidas} titulo="🥤 Elige tu Bebida" />;
}
