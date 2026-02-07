import React, { useRef, useState } from 'react';
import './FilmReelCarousel.css';

/**
 * FilmReelCarousel - Carrusel horizontal de carretes de película
 * Permite scroll horizontal tipo Netflix
 * 
 * Props:
 * - children: Los FilmReel componentes
 */
export default function FilmReelCarousel({ children }) {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageY - scrollContainerRef.current.offsetTop);
    setScrollLeft(scrollContainerRef.current.scrollTop);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - scrollContainerRef.current.offsetTop;
    const walk = (y - startX) * 1.5;
    scrollContainerRef.current.scrollTop = scrollLeft - walk;
  };

  return (
    <div className="film-reel-carousel-container">
      {/* Contenedor de Scroll */}
      <div
        ref={scrollContainerRef}
        className="film-reel-carousel"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ userSelect: isDragging ? 'none' : 'auto' }}
      >
        {children}
      </div>
    </div>
  );
}
