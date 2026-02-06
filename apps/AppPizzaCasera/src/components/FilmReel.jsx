import React from 'react';
import './FilmReel.css';

/**
 * FilmReel - Contenedor tipo carrete de película
 * Ideal para mostrar productos de forma visual y atractiva
 * 
 * Props:
 * - imagen: URL de la imagen a mostrar
 * - titulo: Título del producto
 * - descripcion: Descripción corta
 * - precio: Precio a mostrar
 * - onClick: Callback al hacer click
 * - isSelected: Si está seleccionado
 */
export default function FilmReel({ 
  imagen, 
  titulo, 
  descripcion, 
  precio, 
  onClick, 
  isSelected = false 
}) {
  return (
    <div 
      className={`film-reel ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
    >
      {/* Agujeros superiores - carrete de película */}
      <div className="film-reel-holes-top">
        <span className="hole"></span>
        <span className="hole"></span>
        <span className="hole"></span>
        <span className="hole"></span>
        <span className="hole"></span>
      </div>

      {/* Marco principal */}
      <div className="film-reel-frame">
        {/* Imagen */}
        <div className="film-reel-image-container">
          <img 
            src={imagen} 
            alt={titulo}
            className="film-reel-image"
          />
        </div>

        {/* Info */}
        <div className="film-reel-info">
          <h3 className="film-reel-title">{titulo}</h3>
          <p className="film-reel-description">{descripcion}</p>
          <div className="film-reel-price">{precio}</div>
        </div>
      </div>

      {/* Agujeros inferiores - carrete de película */}
      <div className="film-reel-holes-bottom">
        <span className="hole"></span>
        <span className="hole"></span>
        <span className="hole"></span>
        <span className="hole"></span>
        <span className="hole"></span>
      </div>
    </div>
  );
}
