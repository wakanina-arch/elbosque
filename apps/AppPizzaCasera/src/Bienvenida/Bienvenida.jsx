import React from "react";
import "./Bienvenida.css";
import pizzaImage from "../assets/1. Bienvenida/Pizza Casera.jpg";

export default function Bienvenida() {
  return (
    <div className="bienvenida-container">
      <img 
        src={pizzaImage}
        alt="Pizza Casera" 
      />
      <h1 className="bienvenida-titulo">¡Bienvenidos a Pizza Casera!</h1>
    </div>
  );
}
