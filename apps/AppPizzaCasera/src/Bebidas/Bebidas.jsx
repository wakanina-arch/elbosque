import React,{ useState } from "react";
import "./Bebidas.css";
import "../Pizzas/aniadido.css";

import cocaCola from '../assets/5. Bebidas/CocaCola.jpg';
import fanta from '../assets/5. Bebidas/Fanta.jpg';
import pepsi from '../assets/5. Bebidas/Pepsi.jpg';
import guarana from '../assets/5. Bebidas/Guarana.jpg';
import club from '../assets/5. Bebidas/CervezaClub.jpg';
import heineken from '../assets/5. Bebidas/CervezaHeineken.jpg';
import cerveza from '../assets/5. Bebidas/CervezaGuinness.jpg';
import agua from '../assets/5. Bebidas/AguaMineral.jpg';
import zumoDeFrutas from '../assets/5. Bebidas/ZumoDeFrutas.jpg';
import zumosVerdes from '../assets/5. Bebidas/ZumosVerdes.jpg';

// Función para restar un dólar al precio
function restarUnDolar(valor) {
  const num = parseFloat(valor.replace(/[^\d.]/g, ''));
  return `$${(num - 1).toFixed(2)}`;
}

export default function Bebidas({ agregarAlCarrito }) {
  const [aniadido, setAniadido] = useState(false);
  const bebidas = [
    {
      nombre: "CocaCola",
      img: cocaCola,
      valor: "$1.99",
      caracteristicas: "Refresco clásico con sabor inconfundible."
    },
    {
      nombre: "Fanta",
      img: fanta,
      valor: "$1.89",
      caracteristicas: "Refresco de naranja refrescante y burbujeante."
    },
    {
      nombre: "Pepsi",
      img: pepsi,
      valor: "$1.99",
      caracteristicas: "Refresco con un sabor audaz y refrescante."
    },
    {
      nombre: "Guarana",
      img: guarana,
      valor: "$2.09",
      caracteristicas: "Refresco brasileño hecho con guaraná natural."
    },
    {
      nombre: "CervezaClub",
      img: club,
      valor: "$2.99",
      caracteristicas: "Cerveza rubia colombiana con sabor suave."
    },
    {
      nombre: "CervezaHeineken",
      img: heineken,
      valor: "$3.49",
      caracteristicas: "Cerveza premium de origen holandés."
    },
    {
      nombre: "CervezaGuinness",
      img: cerveza,
      valor: "$3.99",
      caracteristicas: "Cerveza negra irlandesa con sabor intenso."
    },
    {
      nombre: "AguaMineral",
      img: agua,
      valor: "$0.99",
      caracteristicas: "Agua mineral natural sin gas."
    },
    {
      nombre: "ZumoDeFrutas",
      img: zumoDeFrutas,
      valor: "$2.49",
      caracteristicas: "Zumo natural de frutas variadas."
    },
    {
      nombre: "ZumosVerdes",
      img: zumosVerdes,
      valor: "$2.69",
      caracteristicas: "Zumo saludable hecho con vegetales y frutas verdes."
    }
  ];
 
  const [seleccionada, setSeleccionada] = useState(null);
    const [tamano, setTamano] = useState('grande');
  
    return (
      <>
        <h2>Elige tu Bebida</h2>
       <div className="bebidas-container">
        {bebidas.map((bebida, idx) => (
          <div
            key={bebida.nombre}
            className={
              'bebidas-frame' + (seleccionada === idx ? ' selected' : '')
            }
            onClick={() => setSeleccionada(idx)}
          >
            <span style={{ marginBottom: '0.5rem', color: '#c9c3c3', fontWeight: 600, fontSize: '1.1rem', textAlign: 'center' }}>{bebida.nombre}</span>
            <img src={bebida.img} alt={bebida.nombre + ' Bebida'} />
          </div>
        ))}
      </div>
  
        {/* Modal de detalles de bebida  */}
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
            <div style={{
              background: 'none',
              borderRadius: 18,
              padding: 0,
              minWidth: 320,
              maxWidth: 400,
              boxShadow: '0 4px 32px #000a',
              position: 'relative',
              textAlign: 'center',
              zIndex: 10000,
              overflow: 'hidden'
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
                padding: '2rem 2rem 1rem 2rem',
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'visible',
              }}>
                <img src={bebidas[seleccionada].img} alt={bebidas[seleccionada].nombre} style={{ width: 240, height: 240, objectFit: 'cover', borderRadius: 16, marginBottom: 0 }} />
                {aniadido && (
                  <span className="aniadido-float">¡Añadido!</span>
                )}
              </div>
              {/* Parte inferior: nombre, precio y características */}
              <div style={{
                background: '#fff',
                color: '#181818',
                padding: '2rem',
                borderBottomLeftRadius: 18,
                borderBottomRightRadius: 18,
                minHeight: 120,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <h3 style={{ margin: '0 0 12px 0', fontWeight: 700, fontSize: '1.3rem', textAlign: 'center'}}>Bebida {bebidas[seleccionada].nombre}</h3>
                <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>{bebidas[seleccionada].valor}</div>
                <div style={{ fontSize: '1rem', marginBottom: 8, textAlign: 'center' }}>{bebidas[seleccionada].caracteristicas}</div>
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
                    // Añadir la bebida seleccionada al carrito
                    const precio = tamano === 'grande'
                      ? parseFloat(bebidas[seleccionada].valor.replace(/[^\d.]/g, ''))
                      : parseFloat(restarUnDolar(bebidas[seleccionada].valor).replace(/[^\d.]/g, ''));
                    agregarAlCarrito({
                      nombre: bebidas[seleccionada].nombre + (tamano === 'grande' ? ' grande' : ' mediana'),
                      precio,
                      tipo: 'bebida',
                    });
                  }}
                >
                  Añadir 1 por {tamano === 'grande' ? bebidas[seleccionada].valor : restarUnDolar(bebidas [seleccionada].valor)}
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
