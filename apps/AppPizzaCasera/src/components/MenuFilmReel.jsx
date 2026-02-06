import React, { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import FilmReel from './FilmReel';
import FilmReelCarousel from './FilmReelCarousel';
import { obtenerPrecioNumerico, restarDolares } from '../utils/helpers';
import './MenuFilmReel.css';

/**
 * MenuFilmReel - Galería de productos en formato carrete de película con carrusel
 * 
 * Props:
 * - items: Array de productos
 * - titulo: Título de la sección
 */
export default function MenuFilmReel({ items, titulo }) {
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
      <h2 className="menu-film-titulo">{titulo}</h2>
      
      <FilmReelCarousel>
        {items.map((item, idx) => (
          <div 
            key={item.nombre}
            onClick={() => setSeleccionada(idx)}
            role="button"
            className="menu-film-item"
          >
            <FilmReel
              imagen={item.img}
              titulo={item.nombre}
              descripcion={item.caracteristicas}
              precio={item.valor}
              isSelected={seleccionada === idx}
            />
          </div>
        ))}
      </FilmReelCarousel>

      {seleccionada !== null && (
        <div className="menu-film-detalles">
          <div className="menu-film-modal-overlay" onClick={() => setSeleccionada(null)} />
          
          <div className="menu-film-modal">
            <button 
              className="menu-film-close"
              onClick={() => setSeleccionada(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className="menu-film-modal-content">
              <div className="menu-film-modal-left">
                <img 
                  src={items[seleccionada].img} 
                  alt={items[seleccionada].nombre}
                  className="menu-film-modal-image"
                />
              </div>

              <div className="menu-film-modal-right">
                <h2>{items[seleccionada].nombre}</h2>
                <p className="menu-film-modal-desc">{items[seleccionada].caracteristicas}</p>

                <div className="menu-film-tamaño">
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
                      Mediana (-$2)
                    </button>
                  </div>
                </div>

                <div className="menu-film-precio-grande">{precioMostrado}</div>

                <button 
                  className="menu-film-agregar"
                  onClick={handleAgregar}
                >
                  🛒 Agregar al Carrito
                </button>

                {aniadido && <span className="menu-film-aniadido">✓ ¡Añadido!</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

      {seleccionada !== null && (
        <div className="menu-film-detalles">
          <div className="menu-film-modal-overlay" onClick={() => setSeleccionada(null)} />
          
          <div className="menu-film-modal">
            <button 
              className="menu-film-close"
              onClick={() => setSeleccionada(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className="menu-film-modal-content">
              <div className="menu-film-modal-left">
                <img 
                  src={items[seleccionada].img} 
                  alt={items[seleccionada].nombre}
                  className="menu-film-modal-image"
                />
              </div>

              <div className="menu-film-modal-right">
                <h2>{items[seleccionada].nombre}</h2>
                <p className="menu-film-modal-desc">{items[seleccionada].caracteristicas}</p>

                <div className="menu-film-tamaño">
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
                      Mediana (-$2)
                    </button>
                  </div>
                </div>

                <div className="menu-film-precio-grande">{precioMostrado}</div>

                <button 
                  className="menu-film-agregar"
                  onClick={handleAgregar}
                >
                  🛒 Agregar al Carrito
                </button>

                {aniadido && <span className="menu-film-aniadido">✓ ¡Añadido!</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
