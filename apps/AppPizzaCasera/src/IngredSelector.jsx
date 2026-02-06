import React from 'react';
const ingredienteImg = '/imagenes/Pizza-Masa/IMG_0709.JPG';
import './PizzasSelector.css';

const ingredientes = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  nombre: `Ingrediente extra ${i + 1}`,
  imagen: ingredienteImg,
  descripcion: 'Se hornea a alta temperatura hasta que esté dorada y crujiente.'
}));

export default function IngredSelector() {
  return (
    <div>
      <h2>Agrega ingredientes extra</h2>
      <div className="ingredientes-grid">
        {ingredientes.map((ing) => (
          <label className="ingrediente-card" key={ing.id}>
            <input type="checkbox" name={`ingrediente-${ing.id}`} />
            <img src={ing.imagen} alt={ing.nombre} className="ingrediente-img" />
            <span className="ingrediente-nombre">{ing.nombre}</span>
            <span className="ingrediente-desc">{ing.descripcion}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
