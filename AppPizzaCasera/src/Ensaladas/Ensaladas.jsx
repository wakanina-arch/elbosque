

import { restarPrecio } from '../utils/precioUtils';

import React, { useState } from "react";
import "./Ensaladas.css";
import "../Pizzas/aniadido.css";
import alemana from '../assets/3. Ensaladas/Ensalada Alemana de Patata.jpg';
import caprese from '../assets/3. Ensaladas/Ensalada Caprese.jpg';
import cesar from '../assets/3. Ensaladas/Ensalada César.jpg';
import coleslaw from '../assets/3. Ensaladas/Ensalada Coleslaw.jpg';
import griega from '../assets/3. Ensaladas/Ensalada Griega.jpg';
import mimosa from '../assets/3. Ensaladas/Ensalada Mimosa.jpg';
import nizarda from '../assets/3. Ensaladas/Ensalada Nizarda.jpg';
import tabule from '../assets/3. Ensaladas/Ensalada Tabulé.jpg';
import waldorf from '../assets/3. Ensaladas/Ensalada Waldorf.jpg';
import rusa from '../assets/3. Ensaladas/Ensaladilla Rusa.jpg';



export default function Ensaladas({ agregarAlCarrito }) {
  const [aniadido, setAniadido] = useState(false);
  const ensaladas = [
    {
      nombre: "César",
      img: cesar,
      valor: "$7.99",
      caracteristicas: "Lechuga, pollo, parmesano, crutones y aderezo César."
    },
    {
      nombre: "Griega",
      img: griega,
      valor: "$8.49",
      caracteristicas: "Lechuga, tomate, pepino, queso feta y aceitunas negras."
    },
    {
      nombre: "Caprese",
      img: caprese,
      valor: "$7.49",
      caracteristicas: "Tomate, mozzarella, albahaca y aceite de oliva."
    },
    {
      nombre: "Coleslaw",
      img: coleslaw,
      valor: "$6.99",
      caracteristicas: "Repollo, zanahoria y aderezo cremoso."
    },
    {
      nombre: "Alemana de patata",
      img: alemana,
      valor: "$7.29",
      caracteristicas: "Patata, cebolla, pepinillo y mayonesa."
    },
    {
      nombre: "Nizarda",
      img: nizarda,
      valor: "$8.99",
      caracteristicas: "Atún, huevo, judía verde, tomate y aceitunas."
    },
    {
      nombre: "Waldorf",
      img: waldorf,
      valor: "$8.19",
      caracteristicas: "Manzana, apio, nueces y mayonesa."
    },
    {
      nombre: "Mimosa",
      img: mimosa,
      valor: "$7.59",
      caracteristicas: "Patata, zanahoria, huevo y mayonesa."
    },
    {
      nombre: "Rusa",
      img: rusa,
      valor: "$6.99",
      caracteristicas: "Patata, zanahoria, guisantes y mayonesa."
    },
    {
      nombre: "Tabule Vegetal",
      img: tabule,
      valor: "$7.39",
      caracteristicas: "Cuscús, tomate, pepino, perejil y limón."
    },
  ];
  const [seleccionada, setSeleccionada] = useState(null);
  const [tamano, setTamano] = useState('grande');

  return (
    <>
      <h2>Elige tu Ensalada</h2>
      <div className="ensaladas-container">
        {ensaladas.map((ensalada, idx) => (
          <div
            key={ensalada.nombre}
            className={
              'ensalada-frame' + (seleccionada === idx ? ' selected' : '')
            }
            onClick={() => setSeleccionada(idx)}
          >
            <span style={{ marginBottom: '0.5rem', color: '#dfd9d9', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center' }}>{ensalada.nombre}</span>
            <img src={ensalada.img} alt={ensalada.nombre + ' Ensalada'} />
          </div>
        ))}
      </div>

      {/* Modal de detalles de ensalada */}
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
              <img src={ensaladas[seleccionada].img} alt={ensaladas[seleccionada].nombre} style={{ width: 'min(240px, 60vw)', height: 'min(240px, 60vw)', objectFit: 'cover', borderRadius: 16, marginBottom: 0 }} />
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
              <h3 style={{ margin: '0 0 12px 0', fontWeight: 700, fontSize: '1.3rem', textAlign: 'center'}}>Ensalada {ensaladas[seleccionada].nombre}</h3>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{ensaladas[seleccionada].valor}</div>
              <div style={{ fontSize: '1rem', marginBottom: 8, textAlign: 'center' }}>{ensaladas[seleccionada].caracteristicas}</div>
              {/* Selección de tamaño */}
              <div style={{ width: '100%', margin: '18px 0 8px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.05rem', fontWeight: 500 }}>
                  <span>Grande</span>
                  <input type="radio" name="tamano" value="grande" checked={tamano === 'grande'} onChange={() => setTamano('grande')} />
                </label>
                <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.05rem', fontWeight: 500 }}>
                  <span>Mediana <span style={{ color: '#128343', fontWeight: 600, fontSize: '0.98rem', marginLeft: 8 }}>- $1.00</span></span>
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
                  // Añadir la ensalada seleccionada al carrito
                  const precio = tamano === 'grande'
                    ? parseFloat(ensaladas[seleccionada].valor.replace(/[^\d.]/g, ''))
                    : restarPrecio(ensaladas[seleccionada].valor, 1);
                  agregarAlCarrito({
                    nombre: ensaladas[seleccionada].nombre + (tamano === 'grande' ? ' grande' : ' mediana'),
                    precio,
                    tipo: 'ensalada',
                  });
                }}
              >
                Añadir 1 por {tamano === 'grande' ? ensaladas[seleccionada].valor : `$${restarPrecio(ensaladas[seleccionada].valor, 1).toFixed(2)}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
