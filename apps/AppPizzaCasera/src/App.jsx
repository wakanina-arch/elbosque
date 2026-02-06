import React from 'react';
import { CarritoProvider } from './context/CarritoContext';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <CarritoProvider>
      <AppRouter />
    </CarritoProvider>
  );
}

export default App;
