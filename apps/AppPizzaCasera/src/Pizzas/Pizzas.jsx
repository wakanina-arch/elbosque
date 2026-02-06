import React from 'react';
import MenuItem from '../components/MenuItem';
import menuData from '../data/menuData.json';

export default function Pizzas() {
  return <MenuItem items={menuData.pizzas} titulo="Elige tu Pizza" />;
}
