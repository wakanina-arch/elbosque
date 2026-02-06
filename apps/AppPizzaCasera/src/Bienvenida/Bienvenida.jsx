import React from "react";
import "./Bienvenida.css";
import pizzaImage from "../assets/1. Bienvenida/Pizza Casera.jpg";

export default function Bienvenida({ siguiente }) {
  const handleStartOrder = () => {
    if (siguiente) siguiente();
  };

  return (
    <div className="bienvenida-container">
      <div className="bienvenida-content">
        <img 
          src={pizzaImage}
          alt="Pizza Casera"
          className="bienvenida-imagen"
        />
        <h1 className="bienvenida-titulo">¡Bienvenidos a Pizza Casera!</h1>
        <button className="bienvenida-boton" onClick={handleStartOrder}>
          Empezar a Pedir
        </button>
      </div>
    </div>
  );
}
