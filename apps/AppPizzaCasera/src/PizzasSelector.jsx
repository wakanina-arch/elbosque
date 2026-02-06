import React from 'react';
import './PizzasSelectorScreen.css';
import ArrowNavButton from './ArrowNavButton';

// Imágenes genéricas
import pizzaGenerica from '../imagenes/PizzaCasera.jpg';
import enConstruccion from './assets/2. pizzas/EnConstruccion.jpeg';

import { useNavigate } from 'react-router-dom';


const pizzas = [
  {
    id: 1,
    nombre: 'Pizza Margherita',
    imagen: pizzaGenerica,
    descripcion: 'Clásica italiana con tomate, mozzarella y albahaca fresca.'
  },
  {
    id: 2,
    nombre: 'Pizza Pepperoni',
    imagen: pizzaGenerica,
    descripcion: 'Salsa de tomate, mozzarella y abundante pepperoni.'
  },
  {
    id: 3,
    nombre: 'Pizza Cuatro Quesos',
    imagen: pizzaGenerica,
    descripcion: 'Mezcla de mozzarella, gorgonzola, parmesano y queso de cabra.'
  },
  {
    id: 4,
    nombre: 'Pizza Hawaiana',
    imagen: pizzaGenerica,
    descripcion: 'Jamón, piña y queso mozzarella sobre salsa de tomate.'
  },
  {
    id: 5,
    nombre: 'Pizza Vegetariana',
    imagen: pizzaGenerica,
    descripcion: 'Tomate, mozzarella, pimientos, cebolla, champiñones y aceitunas.'
  },
  {
    id: 6,
    nombre: 'Pizza Barbacoa',
    imagen: pizzaGenerica,
    descripcion: 'Pollo, salsa barbacoa, cebolla y queso mozzarella.'
  },
  {
    id: 7,
    nombre: 'Pizza Prosciutto',
    imagen: pizzaGenerica,
    descripcion: 'Jamón cocido, mozzarella y salsa de tomate.'
  },
  {
    id: 8,
    nombre: 'Pizza Funghi',
    imagen: pizzaGenerica,
    descripcion: 'Champiñones frescos, mozzarella y salsa de tomate.'
  },
  {
    id: 9,
    nombre: 'Pizza Napolitana',
    imagen: pizzaGenerica,
    descripcion: 'Anchoas, alcaparras, aceitunas negras y orégano.'
  },
  {
    id: 10,
    nombre: 'Crea tu Pizza!',
    imagen: enConstruccion,
    descripcion: 'Bacon, huevo, cebolla y mezcla de quesos.'
  }
];




export default function PizzasSelector() {
  const navigate = useNavigate();
  return (
    <div className="pizzas-selector-container" style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '16px 0' }}>
        <ArrowNavButton direction="back" to={-1} label="Atrás" />
        <h2 style={{ textAlign: 'center', margin: '0 8px', flex: 1 }}>Elige tu pizza favorita</h2>
        <ArrowNavButton direction="forward" to="/ingredientes" label="Siguiente" />
      </div>
      <div className="pizzas-grid">
        <div className="pizzas-columna">
          {pizzas.slice(0, 5).map((pizza) => (
            <div className="pizza-card" key={pizza.id}>
              <img src={pizza.imagen} alt={pizza.nombre} className="pizza-img" />
              <div className="pizza-info">
                <h3>{pizza.nombre}</h3>
                <pre className="pizza-desc">{pizza.descripcion}</pre>
                <div className="pizza-btns">
                  <button className="btn-roja" onClick={() => navigate('/ingredientes')}>Construye tu Pizza</button>
                  <button className="btn-roja btn-ordenar">Ordena tu Pizza</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pizzas-columna">
          {pizzas.slice(5, 10).map((pizza) => (
            <div className="pizza-card" key={pizza.id}>
              <img src={pizza.imagen} alt={pizza.nombre} className="pizza-img" />
              <div className="pizza-info">
                <h3>{pizza.nombre}</h3>
                <pre className="pizza-desc">{pizza.descripcion}</pre>
                <div className="pizza-btns">
                  <button className="btn-roja" onClick={() => navigate('/ingredientes')}>Construye tu Pizza</button>
                  <button className="btn-roja btn-ordenar">Ordena tu Pizza</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
