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
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
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
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
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
