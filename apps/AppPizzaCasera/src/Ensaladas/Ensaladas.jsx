import React from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData.json';

export default function Ensaladas() {
  return <MenuItem items={menuData.ensaladas} titulo="Elige tu Ensalada" />;
}
