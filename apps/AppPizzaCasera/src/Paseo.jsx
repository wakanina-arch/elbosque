import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Paseo() {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/pizzas')
      .then((res) => {
        if (!res.ok) throw new Error('Error en el servidor');
        return res.json();
      })
      .then((data) => setPizzas(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="paseo-container">
      <h2>Elige tu pizza favorita</h2>
      <ul>
        {pizzas.map((pizza, idx) => (
          <li key={idx}>
            <strong>{pizza.nombre}</strong> - ${pizza.precio}<br/>
            <span>{pizza.ingredientes}</span>
          </li>
        ))}
      </ul>
      <Link to="/salida" className="btn-salida">Finalizar pedido</Link>
    </div>
  );
}

export default Paseo;
