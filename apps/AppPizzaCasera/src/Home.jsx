
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Pizza Casera</h1>
      <p>¡Pizza Casera a Domicilio!</p>
      <Link to="/pizzas" className="btn-listado">Ver menú de pizzas</Link>
    </div>
  );
}

export default Home;
