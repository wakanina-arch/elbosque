import React from 'react';
import './FilmReel.css';

/**
 * FilmReel - Carrete de película fotográfica auténtico
 * Diseño realista inspirado en carretes de cine de 35mm
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
  // Generar agujeros de perforación (sprocket holes)
  const holesCount = 7;
  const holes = Array.from({ length: holesCount }, (_, i) => i);

  return (
    <div 
      className={`film-reel ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
    >
      {/* Agujeros superiores - Sprocket holes */}
      <div className="film-reel-holes-top">
        {holes.map((i) => (
          <span key={`top-${i}`} className="hole"></span>
        ))}
      </div>

      {/* Marco principal - Carrete cilíndrico */}
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

      {/* Agujeros inferiores - Sprocket holes */}
      <div className="film-reel-holes-bottom">
        {holes.map((i) => (
          <span key={`bottom-${i}`} className="hole"></span>
        ))}
      </div>
    </div>
  );
}
