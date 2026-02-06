import React from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData.json';

export default function Bebidas() {
  return <MenuItem items={menuData.bebidas} titulo="Elige tu Bebida" />;
}
