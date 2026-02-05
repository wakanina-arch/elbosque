import React, { useState } from "react";
import PerfilModal from "./PerfilModal";
import Bienvenida from "./Bienvenida/Bienvenida";
import Pizzas from "./Pizzas/Pizzas";
import Ensaladas from "./Ensaladas/Ensaladas";
import Complementos from "./Complementos/Complementos";
import Bebidas from "./Bebidas/Bebidas";
import Finalizacion from "./Finalizacion/Finalizacion";
import AdminPanel from "./AdminPanel";
import UserDataForm from "./UserDataForm";

const pantallas = [
  { id: "bienvenida", componente: <Bienvenida /> },
  { id: "pizzas", componente: <Pizzas /> },
  { id: "ensaladas", componente: <Ensaladas /> },
  { id: "complementos", componente: <Complementos /> },
  { id: "bebidas", componente: <Bebidas /> },
  { id: "finalizacion", componente: <Finalizacion /> },
  { id: "admin", componente: <AdminPanel /> },
];

function AppRouter() {
  const [indice, setIndice] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [showUserForm, setShowUserForm] = useState(() => {
    const saved = localStorage.getItem("userData");
    return !saved;
  });
  const [perfilAbierto, setPerfilAbierto] = useState(false);
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved ? JSON.parse(saved) : null;
  });

  const siguiente = () => {
    if (indice < pantallas.length - 1) setIndice(indice + 1);
  };
  const anterior = () => {
    if (indice > 0) setIndice(indice - 1);
  };

  // Renderizar cada pantalla pasando las props necesarias
  let componenteActual = null;
  const idPantalla = pantallas[indice].id;
  if (showUserForm) {
    componenteActual = <UserDataForm onSave={datos => {
      setShowUserForm(false);
      setUserData(datos);
    }} />;
  } else if (idPantalla === "pizzas") {
    componenteActual = <Pizzas agregarAlCarrito={producto => setCarrito([...carrito, producto])} />;
  } else if (idPantalla === "ensaladas") {
    componenteActual = <Ensaladas agregarAlCarrito={producto => setCarrito([...carrito, producto])} />;
  } else if (idPantalla === "complementos") {
    componenteActual = <Complementos agregarAlCarrito={producto => setCarrito([...carrito, producto])} />;
  } else if (idPantalla === "bebidas") {
    componenteActual = <Bebidas agregarAlCarrito={producto => setCarrito([...carrito, producto])} />;
  } else if (idPantalla === "finalizacion") {
    componenteActual = <Finalizacion carrito={carrito} />;
  } else {
    componenteActual = pantallas[indice].componente;
  }

  // Barra de navegación inferior
  const navItems = [
    { id: "bienvenida", label: "Inicio", icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5" stroke="#128343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 10.5V20a1 1 0 001 1h3.5a1 1 0 001-1v-4h2v4a1 1 0 001 1H18a1 1 0 001-1v-9.5" stroke="#128343" strokeWidth="2" strokeLinecap="round"/></svg>
    ) },
    { id: "pizzas", label: "Buscar", icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#128343" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#128343" strokeWidth="2" strokeLinecap="round"/></svg>
    ) },
    { id: "finalizacion", label: "Carrito", icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 6h15l-1.5 9h-13z" stroke="#128343" strokeWidth="2" strokeLinejoin="round"/><circle cx="9" cy="21" r="1" fill="#128343"/><circle cx="18" cy="21" r="1" fill="#128343"/></svg>
    ) },
    { id: "admin", label: "Perfil", icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#128343" strokeWidth="2"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="#128343" strokeWidth="2"/></svg>
    ) },
  ];

  const goToPantalla = (pantallaId) => {
    if (pantallaId === "admin") {
      setPerfilAbierto(true);
      return;
    }
    const idx = pantallas.findIndex(p => p.id === pantallaId);
    if (idx !== -1) setIndice(idx);
  };

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

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      paddingBottom: 70,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 70px)',
      }}>
        {componenteActual}
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
          {indice > 0 && (
            <button onClick={anterior} style={{ marginRight: "1rem" }}>Anterior</button>
          )}
          {indice < pantallas.length - 1 && (
            <button onClick={siguiente}>Siguiente</button>
          )}
        </div>
      </div>
      {/* Barra de navegación inferior */}
      <PerfilModal
        open={perfilAbierto}
        onClose={() => setPerfilAbierto(false)}
        onEdit={handlePerfilEdit}
        onLogout={handlePerfilLogout}
        userData={userData}
      />
      <nav style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        height: 62,
        background: '#fffdfa',
        borderTop: '1.5px solid #e6e0d0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
        boxShadow: '0 -2px 12px #0001',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 38,
          width: '100%',
          maxWidth: 420,
        }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => goToPantalla(item.id)}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: indice === pantallas.findIndex(p => p.id === item.id) ? '#128343' : '#888',
                fontWeight: indice === pantallas.findIndex(p => p.id === item.id) ? 700 : 500,
                fontSize: 13,
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s',
                minWidth: 60,
              }}
              aria-label={item.label}
            >
              {item.icon}
              <span style={{ marginTop: 2 }}>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default AppRouter;
