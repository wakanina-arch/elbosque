import React, { useState } from "react";
import "./Complementos.css";
import "../Pizzas/aniadido.css";
import alitas1 from '../assets/4. Complementos/Alitas1.png';
import alitas2 from '../assets/4. Complementos/Alitas2.png';
import bistec from '../assets/4. Complementos/Bistec convinado.png';
import bowl from '../assets/4. Complementos/Bowl Patatas fritas.png';
import nachos from '../assets/4. Complementos/Nachos con queso.png';
import palomitas from '../assets/4. Complementos/Palomitas de maíz.png';
import pincho from '../assets/4. Complementos/Pincho de verduras.png';
import pichos from '../assets/4. Complementos/Pinchos morunos.png';
import pollo from '../assets/4. Complementos/Pollo broster.png';
import tabla from '../assets/4. Complementos/Tabla flamenca.png';

import { restarPrecio } from '../utils/precioUtils';

export default function Complementos({ agregarAlCarrito }) {
  const [aniadido, setAniadido] = useState(false);
  const complementos = [
    {
      nombre: "Alitas de Pollo",
      img: alitas1,
      valor: "$5.99",
      caracteristicas: "Deliciosas alitas de pollo fritas con salsa BBQ."
    },
    {
      nombre: "Alitas de Pollo BBQ",
      img: alitas2,
      valor: "$6.49",
      caracteristicas: "Alitas de pollo con salsa BBQ ahumada."
    },
    {
      nombre: "Bistec Combinado",
      img: bistec,
      valor: "$12.99",
      caracteristicas: "Bistec jugoso acompañado de papas fritas y ensalada."
    },
    {
      nombre: "Bowl de Patatas",
      img: bowl,
      valor: "$4.99",
      caracteristicas: "Tazón de papas fritas crujientes con aderezo especial."
    },
    {
      nombre: "Nachos con Queso",
      img: nachos,
      valor: "$6.49",
      caracteristicas: "Crujientes nachos cubiertos con queso derretido y jalapeños."
    },
    {
      nombre: "Palomitas de Maíz",
      img: palomitas,
      valor: "$3.49",
      caracteristicas: "Palomitas de maíz frescas y saladas."
    },
    {
      nombre: "Pincho de Verduras",
      img: pincho,
      valor: "$4.99",
      caracteristicas: "Variedad de verduras asadas en un pincho."
    },
    {
      nombre: "Pichos Morunos",
      img: pichos,
      valor: "$7.99",
      caracteristicas: "Sabrosos pichos morunos marinados y a la parrilla."
    },
    {
      nombre: "Pollo Broster",
      img: pollo,
      valor: "$8.49",
      caracteristicas: "Crujiente pollo broster servido con salsa especial."
    },
    {
      nombre: "Tabla Flamenca",
      img: tabla,
      valor: "$14.99",
      caracteristicas: "Selección de embutidos, quesos y acompañamientos."
    }
  ];
 const [seleccionada, setSeleccionada] = useState(null);
  const [tamano, setTamano] = useState('grande');

  return (
    <>
      <h2>Elige tu Complemento</h2>
      <div className="complementos-container">
        {complementos.map((complemento, idx) => (
          <div
            key={complemento.nombre}
            className={
              'complemento-frame' + (seleccionada === idx ? ' selected' : '')
            }
            onClick={() => setSeleccionada(idx)}
          >
            <span style={{ marginBottom: '0.5rem', color: '#d5cece', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center' }}>{complemento.nombre}</span>
            <img src={complemento.img} alt={complemento.nombre + ' Complemento'} />
          </div>
        ))}
      </div>

      {/* Modal de detalles de complemento  */}
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
              overflow: 'hidden',
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
              <img src={complementos[seleccionada].img} alt={complementos[seleccionada].nombre} style={{ width: 'min(240px, 60vw)', height: 'min(240px, 60vw)', objectFit: 'cover', borderRadius: 16, marginBottom: 0 }} />
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
              <h3 style={{ margin: '0 0 12px 0', fontWeight: 700, fontSize: '1.3rem', textAlign: 'center'}}>Complemento {complementos[seleccionada].nombre}</h3>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{complementos[seleccionada].valor}</div>
              <div style={{ fontSize: '1rem', marginBottom: 8, textAlign: 'center' }}>{complementos[seleccionada].caracteristicas}</div>
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
                  // Añadir el complemento seleccionado al carrito
                  const precio = tamano === 'grande'
                    ? parseFloat(complementos[seleccionada].valor.replace(/[^\d.]/g, ''))
                    : restarPrecio(complementos[seleccionada].valor, 1);
                  agregarAlCarrito({
                    nombre: complementos[seleccionada].nombre + (tamano === 'grande' ? ' grande' : ' mediana'),
                    precio,
                    tipo: 'complemento',
                  });
                }}
              >
                Añadir 1 por {tamano === 'grande' ? complementos[seleccionada].valor : `$${restarPrecio(complementos[seleccionada].valor, 1).toFixed(2)}`}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
