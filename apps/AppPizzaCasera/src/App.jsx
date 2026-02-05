import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entrada from './Entrada';
import PizzasSelector from './PizzasSelector';
import Salida from './Salida';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <AppRouter />
  );
}

export default App;
