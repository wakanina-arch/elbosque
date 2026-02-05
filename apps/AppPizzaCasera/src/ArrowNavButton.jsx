import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArrowNavButton.css';

export default function ArrowNavButton({ direction = 'back', to = -1, label }) {
  const navigate = useNavigate();
  const isBack = direction === 'back';
  return (
    <button
      className={`arrow-nav-btn ${isBack ? 'back' : 'forward'}`}
      onClick={() => navigate(to)}
      aria-label={label || (isBack ? 'Atrás' : 'Adelante')}
    >
      {isBack ? '←' : '→'}
    </button>
  );
}
