import React, { useState } from "react";
import "./AppRouter.css";
import PerfilModal from "./PerfilModal";
import Bienvenida from "./Bienvenida/Bienvenida";
import Pizzas from "./Pizzas/Pizzas";
import Ensaladas from "./Ensaladas/Ensaladas";
import Complementos from "./Complementos/Complementos";
import Bebidas from "./Bebidas/Bebidas";
import Finalizacion from "./Finalizacion/Finalizacion";
import AdminPanel from "./AdminPanel";
import UserDataForm from "./UserDataForm";

function AppRouter() {
  const [indice, setIndice] = useState(0);
  const [showUserForm, setShowUserForm] = useState(() => {
    const saved = localStorage.getItem("userData");
    return !saved;
  });
  const [perfilAbierto, setPerfilAbierto] = useState(false);
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : null;
  });

  const pantallas = [
    { id: "bienvenida", componente: <Bienvenida siguiente={() => setIndice(1)} /> },
    { id: "pizzas", componente: <Pizzas /> },
    { id: "ensaladas", componente: <Ensaladas /> },
    { id: "complementos", componente: <Complementos /> },
    { id: "bebidas", componente: <Bebidas /> },
    { id: "finalizacion", componente: <Finalizacion /> },
    { id: "admin", componente: <AdminPanel /> },
  ];

  let pantalla = null;
  if (showUserForm) {
    pantalla = (
      <UserDataForm 
        onSave={(datos) => {
          setShowUserForm(false);
          setUserData(datos);
        }} 
      />
    );
  } else {
    pantalla = pantallas[indice].componente;
  }

  const handlePerfilEdit = (datos) => {
    setUserData(datos);
    localStorage.setItem("userData", JSON.stringify(datos));
  };

  const handlePerfilLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    setPerfilAbierto(false);
    setShowUserForm(true);
    setIndice(0);
  };

  const navItems = [
    { emoji: "🏠", label: "Inicio", index: 0 },
    { emoji: "🔍", label: "Buscar", index: 1 },
    { emoji: "🛒", label: "Carrito", index: 5 },
    { emoji: "👤", label: "Perfil", index: null },
  ];

  return (
    <div className="app-router-container" role="application" aria-label="El Bosque - Aplicación de compra">
      <main className="app-router-content" role="main">
        {pantalla}
      </main>

      {!showUserForm && indice > 0 && (
        <button
          onClick={() => setIndice(indice - 1)}
          className="app-router-nav-btn app-router-nav-btn-prev"
          aria-label="Ir a la pantalla anterior"
          title="Pantalla anterior"
        >
          ← Anterior
        </button>
      )}

      {!showUserForm && indice < pantallas.length - 1 && (
        <button
          onClick={() => setIndice(indice + 1)}
          className="app-router-nav-btn app-router-nav-btn-next"
          aria-label="Ir a la próxima pantalla"
          title="Próxima pantalla"
        >
          Siguiente →
        </button>
      )}

      <nav className="app-router-navbar" role="navigation" aria-label="Menú principal">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => item.index !== null ? setIndice(item.index) : setPerfilAbierto(true)}
            className={`app-router-navbar-btn ${item.index === indice ? 'active' : ''}`}
            aria-current={item.index === indice ? "page" : undefined}
            aria-label={item.label}
            title={item.label}
          >
            <span className="app-router-navbar-emoji" aria-hidden="true">{item.emoji}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <PerfilModal
        open={perfilAbierto}
        onClose={() => setPerfilAbierto(false)}
        onEdit={handlePerfilEdit}
        onLogout={handlePerfilLogout}
        userData={userData}
      />
    </div>
  );
}

export default AppRouter;
