import React, { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { obtenerPrecioNumerico, restarDolares } from '../utils/helpers';
import './MenuItem.css';

export default function MenuItem({ items, titulo }) {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const [seleccionada, setSeleccionada] = useState(null);
  const [tamano, setTamano] = useState('grande');
  const [aniadido, setAniadido] = useState(false);

  const handleAgregar = () => {
    if (seleccionada === null) return;

    const item = items[seleccionada];
    const precioBase = obtenerPrecioNumerico(item.valor);
    const precioFinal = tamano === 'mediana' ? precioBase - 2 : precioBase;

    agregarAlCarrito({
      nombre: item.nombre + (tamano === 'grande' ? ' grande' : ' mediana'),
      precio: precioFinal,
    });

    setAniadido(true);
    setTimeout(() => setAniadido(false), 1100);
  };

  const precioMostrado =
    seleccionada !== null
      ? tamano === 'grande'
        ? items[seleccionada].valor
        : restarDolares(items[seleccionada].valor, 2)
      : 'Selecciona';

  return (
    <>
      <h2>{titulo}</h2>
      <div className="menu-container">
        {items.map((item, idx) => (
          <div
            key={item.nombre}
            className={'menu-frame' + (seleccionada === idx ? ' selected' : '')}
            onClick={() => setSeleccionada(idx)}
          >
            <span className="menu-nombre">{item.nombre}</span>
            <img src={item.img} alt={item.nombre} />
          </div>
        ))}
      </div>

      {seleccionada !== null && (
        <div className="menu-detalles">
          <div className="menu-info">
            <h3>{items[seleccionada].nombre}</h3>
            <p>{items[seleccionada].caracteristicas}</p>

            <div className="menu-tamaño">
              <label>Tamaño:</label>
              <div className="tamaño-opciones">
                <button
                  className={'tamaño-btn' + (tamano === 'grande' ? ' activo' : '')}
                  onClick={() => setTamano('grande')}
                >
                  Grande
                </button>
                <button
                  className={'tamaño-btn' + (tamano === 'mediana' ? ' activo' : '')}
                  onClick={() => setTamano('mediana')}
                >
                  Mediana
                </button>
              </div>
            </div>

            <div className="menu-precio">{precioMostrado}</div>

            <button className="menu-agregar" onClick={handleAgregar}>
              Agregar al Carrito
            </button>

            {aniadido && <span className="menu-aniadido">¡Añadido!</span>}
          </div>
        </div>
      )}
    </>
  );
}
