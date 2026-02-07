import React from 'react';
import MenuFilmReel from '../components/MenuFilmReel';
import menuData from '../data/menuData.json';

export default function Pizzas() {
  return <MenuFilmReel items={menuData.pizzas} titulo="Elige tu Pizza" />;
}
