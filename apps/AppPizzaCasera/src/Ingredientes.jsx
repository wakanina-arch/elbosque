
import React from 'react';
import './Ingredientes.css';
import ingredienteImg from '../imagenes/Pizza-Masa/IMG_0709.JPG';
import ArrowNavButton from './ArrowNavButton';

// Array de 22 ingredientes autónomos
const ingredientes = [
  { id: 1, nombre: 'Queso Mozzarella', imagen: ingredienteImg, descripcion: 'Clásico queso para fundir.' },
  { id: 2, nombre: 'Jamón Cocido', imagen: ingredienteImg, descripcion: 'Jamón suave y sabroso.' },
  { id: 3, nombre: 'Pepperoni', imagen: ingredienteImg, descripcion: 'Rodajas de pepperoni picante.' },
  { id: 4, nombre: 'Champiñones', imagen: ingredienteImg, descripcion: 'Champiñones frescos laminados.' },
  { id: 5, nombre: 'Aceitunas Negras', imagen: ingredienteImg, descripcion: 'Aceitunas sin hueso.' },
  { id: 6, nombre: 'Cebolla', imagen: ingredienteImg, descripcion: 'Cebolla morada en tiras.' },
  { id: 7, nombre: 'Pimiento Rojo', imagen: ingredienteImg, descripcion: 'Pimiento rojo asado.' },
  { id: 8, nombre: 'Anchoas', imagen: ingredienteImg, descripcion: 'Anchoas en aceite.' },
  { id: 9, nombre: 'Albahaca', imagen: ingredienteImg, descripcion: 'Hojas frescas de albahaca.' },
  { id: 10, nombre: 'Queso de Cabra', imagen: ingredienteImg, descripcion: 'Queso de cabra cremoso.' },
  { id: 11, nombre: 'Pollo', imagen: ingredienteImg, descripcion: 'Tiras de pollo asado.' },
  { id: 12, nombre: 'Bacon', imagen: ingredienteImg, descripcion: 'Trocitos de bacon crujiente.' },
  { id: 13, nombre: 'Piña', imagen: ingredienteImg, descripcion: 'Trozo de piña natural.' },
  { id: 14, nombre: 'Gorgonzola', imagen: ingredienteImg, descripcion: 'Queso azul italiano.' },
  { id: 15, nombre: 'Parmesano', imagen: ingredienteImg, descripcion: 'Láminas de parmesano.' },
  { id: 16, nombre: 'Tomate Cherry', imagen: ingredienteImg, descripcion: 'Tomates cherry frescos.' },
  { id: 17, nombre: 'Orégano', imagen: ingredienteImg, descripcion: 'Orégano seco.' },
  { id: 18, nombre: 'Salsa Barbacoa', imagen: ingredienteImg, descripcion: 'Salsa barbacoa casera.' },
  { id: 19, nombre: 'Queso Emmental', imagen: ingredienteImg, descripcion: 'Queso suizo rallado.' },
  { id: 20, nombre: 'Alcaparras', imagen: ingredienteImg, descripcion: 'Alcaparras en vinagre.' },
  { id: 21, nombre: 'Berenjena', imagen: ingredienteImg, descripcion: 'Berenjena asada.' },
  { id: 22, nombre: 'Rúcula', imagen: ingredienteImg, descripcion: 'Hojas frescas de rúcula.' },
];

export default function Ingredientes() {
  // Dividir ingredientes en dos filas de 11
  const fila1 = ingredientes.slice(0, 11);
  const fila2 = ingredientes.slice(11, 22);
  return (
    <div className="ingredientes-pantalla-container" style={{ minHeight: '100vh', position: 'relative' }}>
      <ArrowNavButton direction="back" to={-1} label="Atrás" />
      <ArrowNavButton direction="forward" to="/salida" label="Siguiente" />
      <h2 className="ingredientes-titulo" style={{ textAlign: 'center', margin: '32px 0 16px 0' }}>Todos los ingredientes</h2>
      <div className="ingredientes-filas">
        <div className="ingredientes-fila">
          {fila1.map((ing) => (
            <div className="ingrediente-card" key={ing.id}>
              <img src={ing.imagen} alt={ing.nombre} className="ingrediente-img" />
              <div className="ingrediente-info">
                <h3 style={{ margin: 0, fontSize: '1rem' }}>{ing.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="ingredientes-fila">
          {fila2.map((ing) => (
            <div className="ingrediente-card" key={ing.id}>
              <img src={ing.imagen} alt={ing.nombre} className="ingrediente-img" />
              <div className="ingrediente-info">
                <h3 style={{ margin: 0, fontSize: '1rem' }}>{ing.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contenedor tipo piscina/patio, centrado en la mitad inferior y al doble de diámetro */}
      <div className="piscina-contenedor">
        <div className="piscina">
          <span className="piscina-texto">Piscina de ingredientes</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 0 0' }}>
        <button className="btn-roja btn-ordenar" style={{ fontSize: '1.1rem', padding: '10px 28px', borderRadius: '24px', fontWeight: 'bold' }}>
          Ordena tu Pizza
        </button>
      </div>
    </div>
  );
}
