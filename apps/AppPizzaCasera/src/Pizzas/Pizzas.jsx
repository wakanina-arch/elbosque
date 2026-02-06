// Función para restar $2.00 a un string de precio tipo "$12.99"
function restarDosDolares(precio) {
  if (!precio) return '';
  const num = parseFloat(precio.replace(/[^\d.]/g, ''));
  if (isNaN(num)) return precio;
  const nuevo = (num - 2).toFixed(2);
  return `$${nuevo}`;
}

import React, { useState } from "react";
import "./Pizzas.css";
import "./aniadido.css";

import carbonara from '../assets/2. pizzas/Carbonara.jpg';
import champiñones from '../assets/2. pizzas/Champiñones.jpg';
import cuatroQuesos from '../assets/2. pizzas/Cuatro Quesos.jpg';
import hawaiana from '../assets/2. pizzas/Hawaiana.jpg';
import margherita from '../assets/2. pizzas/Margherita.jpg';
import marinera from '../assets/2. pizzas/Marinera.jpg';
import napolitana from '../assets/2. pizzas/Napolitana.jpg';
import pepperoni from '../assets/2. pizzas/Pepperoni.jpg';
import rustica from '../assets/2. pizzas/Rústica.jpg';

function Pizzas({ agregarAlCarrito }) {
  const [aniadido, setAniadido] = useState(false);
  const pizzas = [
    {
      nombre: "Carbonara",
      img: carbonara,
      valor: "$12.99",
      caracteristicas: "Lorem ipsum dolor sit amet, Carbonara pizza description."
    },
    {
      nombre: "Champiñones",
      img: champiñones,
      valor: "$11.99",
      caracteristicas: "Lorem ipsum dolor sit amet, Champiñones pizza description."
    },
    {
      nombre: "Cuatro Quesos",
      img: cuatroQuesos,
      valor: "$13.99",
      caracteristicas: "Lorem ipsum dolor sit amet, Cuatro Quesos pizza description."
    },
    {
      nombre: "Hawaiana",
      img: hawaiana,
      valor: "$12.49",
      caracteristicas: "Lorem ipsum dolor sit amet, Hawaiana pizza description."
    },
    {
      nombre: "Margherita",
      img: margherita,
      valor: "$10.99",
      caracteristicas: "Lorem ipsum dolor sit amet, Margherita pizza description."
    },
    {
      nombre: "Marinera",
      img: marinera,
      valor: "$11.49",
      caracteristicas: "Lorem ipsum dolor sit amet, Marinera pizza description."
    },
    {
      nombre: "Napolitana",
      img: napolitana,
      valor: "$13.49",
      caracteristicas: "Lorem ipsum dolor sit amet, Napolitana pizza description."
    },
    {
      nombre: "Pepperoni",
      img: pepperoni,
      valor: "$14.49",
      caracteristicas: "Lorem ipsum dolor sit amet, Pepperoni pizza description."
    },
    {
      nombre: "Rústica",
      img: rustica,
      valor: "$12.99",
      caracteristicas: "Lorem ipsum dolor sit amet, Rústica pizza description."
    },
  ];
  const [seleccionada, setSeleccionada] = useState(null);
  const [tamano, setTamano] = useState('grande');
  // const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <h2>Elige tu Pizza</h2>
      <div className="pizzas-container">
        {pizzas.map((pizza, idx) => (
          <div
            key={pizza.nombre}
            className={
              'pizza-frame' + (seleccionada === idx ? ' selected' : '')
            }
            onClick={() => setSeleccionada(idx)}
          >
            <span style={{ marginBottom: '0.5rem', color: '#cec7c7', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center' }}>{pizza.nombre}</span>
            <img src={pizza.img} alt={pizza.nombre + ' Pizza'} />
          </div>
        ))}
      </div>

      {/* Modal de detalles de pizza */}
      {seleccionada !== null && (
        <div style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          transition: 'background 0.2s',
        }}
          onClick={() => setSeleccionada(null)}
        >
          <div
            style={{
              background: 'none',
              borderRadius: 18,
              padding: 0,
              minWidth: 'min(320px, 90vw)',
              maxWidth: 'min(400px, 95vw)',
              width: '95vw',
              boxShadow: '0 4px 32px #000a',
              position: 'relative',
              textAlign: 'center',
              zIndex: 10000,
              overflow: 'visible',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSeleccionada(null)} style={{
              position: 'absolute',
              top: 10,
              right: 16,
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 24,
              cursor: 'pointer',
              zIndex: 10001
            }}>&times;</button>
            {/* Parte superior: solo imagen */}
            <div style={{
              background: '#181818',
              padding: 'max(1rem, 4vw) max(1rem, 4vw) max(0.5rem, 2vw) max(1rem, 4vw)',
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'visible',
            }}>
              <img src={pizzas[seleccionada].img} alt={pizzas[seleccionada].nombre} style={{ width: 'min(240px, 60vw)', height: 'min(240px, 60vw)', objectFit: 'cover', borderRadius: 16, marginBottom: 0 }} />
              {aniadido && (
                <span className="aniadido-float">¡Añadido!</span>
              )}
            </div>
            {/* Parte inferior: nombre, precio y características */}
                    <div style={{
                      background: '#fff',
                      color: '#181818',
                      padding: 'max(1.2rem, 4vw)',
                      borderBottomLeftRadius: 18,
                      borderBottomRightRadius: 18,
                      minHeight: 120,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}>
                      <h3 style={{ margin: '0 0 12px 0', fontWeight: 700, fontSize: '1.3rem', textAlign: 'center'}}>Pizza {pizzas[seleccionada].nombre}</h3>
                      <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{pizzas[seleccionada].valor}</div>
                      <div style={{ fontSize: '1rem', marginBottom: 8, textAlign: 'center' }}>{pizzas[seleccionada].caracteristicas}</div>
                      {/* Selección de tamaño */}
                      <div style={{ width: '100%', margin: '18px 0 8px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.05rem', fontWeight: 500 }}>
                          <span>Pizza grande</span>
                          <input type="radio" name="tamano" value="grande" checked={tamano === 'grande'} onChange={() => setTamano('grande')} />
                        </label>
                        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.05rem', fontWeight: 500 }}>
                          <span>Pizza mediana <span style={{ color: '#128343', fontWeight: 600, fontSize: '0.98rem', marginLeft: 8 }}>- $2.00</span></span>
                          <input type="radio" name="tamano" value="mediana" checked={tamano === 'mediana'} onChange={() => setTamano('mediana')} />
                        </label>
                      </div>
                      {/* Botón de añadir dentro del modal blanco */}
                      <button
                        style={{
                          marginTop: 24,
                          background: '#128343',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 8,
                          padding: '10px 32px',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          boxShadow: '0 2px 8px #0002',
                          transition: 'background 0.2s',
                        }}
                        onClick={() => {
                          setAniadido(true);
                          setTimeout(() => setAniadido(false), 1100);
                          // Añadir la pizza seleccionada al carrito
                          const precio = tamano === 'grande'
                            ? parseFloat(pizzas[seleccionada].valor.replace(/[^\d.]/g, ''))
                            : parseFloat(restarDosDolares(pizzas[seleccionada].valor).replace(/[^\d.]/g, ''));
                          agregarAlCarrito({
                            nombre: pizzas[seleccionada].nombre + (tamano === 'grande' ? ' grande' : ' mediana'),
                            precio,
                            tipo: 'pizza',
                          });
                        }}
                      >
                        Añadir 1 por {tamano === 'grande' ? pizzas[seleccionada].valor : restarDosDolares(pizzas[seleccionada].valor)}
                      </button>
                      {/* Aquí irá el selector de cantidad y el botón flotante en el siguiente paso */}
                    </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pizzas;