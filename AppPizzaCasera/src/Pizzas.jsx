import React, { useEffect, useState } from 'react';
import './App.css';

function Pizzas() {
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
    <div className="pizzas-container">
      <h2>Menú de Pizzas</h2>
      <ul>
        {pizzas.map((pizza, idx) => (
          <li key={idx}>{pizza.nombre} - ${pizza.precio}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pizzas;
