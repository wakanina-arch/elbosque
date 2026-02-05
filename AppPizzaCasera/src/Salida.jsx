import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Salida() {
  return (
    <div className="salida-container">
      <h2>¡Gracias por tu pedido!</h2>
      <p>Tu pizza está en camino 🍕</p>
      <Link to="/" className="btn-entrada">Volver al inicio</Link>
    </div>
  );
}

export default Salida;
