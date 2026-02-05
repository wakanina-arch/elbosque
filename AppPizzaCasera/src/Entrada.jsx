import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import './App.css';


function Entrada() {
  return (
    <div className="entrada-container" style={{
      background: 'linear-gradient(135deg, #111 60%, #ffe600 100%)',
      minHeight: '100vh',
      minWidth: '100vw',
      width: '100vw',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      padding: '2vw',
    }}>
      <h1 style={{
        color: '#ffe600',
        textShadow: '2px 2px 8px #000, 0 0 10px #e53935',
        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
        marginBottom: '0.5rem',
        textAlign: 'center',
      }}>¡Pizza Casera!</h1>
      <Carousel />
      <p className="frase-motivadora">
        ¡Haz de tu pedido una experiencia deliciosa!
      </p>
      <p className="frase-historia">
        “Cada pizza es una nueva historia. ¿Listo para saborearla?”
      </p>
      <Link to="/paseo" className="btn-entrada" style={{
        background: 'linear-gradient(90deg, #e53935 60%, #43a047 100%)',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        border: 'none',
        borderRadius: '2rem',
        padding: '0.8rem 2.5rem',
        boxShadow: '0 2px 12px #0008',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'transform 0.2s',
      }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Comienza tu aventura
      </Link>
    </div>
  );
}

export default Entrada;
