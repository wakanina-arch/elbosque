import React, { useState, useEffect } from 'react';
import './Carousel.css';



// Carga automática de todas las imágenes de la carpeta pizzas (jpeg, jpg, png)
const imageModules = import.meta.glob('./assets/pizzas/*.{jpeg,jpg,png}', { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default).sort();

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[current]} alt="Pizza" className="carousel-img" />
    </div>
  );
}

export default Carousel;
