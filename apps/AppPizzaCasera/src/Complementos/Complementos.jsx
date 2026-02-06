import React from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData.json';

export default function Complementos() {
  return <MenuItem items={menuData.complementos} titulo="Elige tu Complemento" />;
}
