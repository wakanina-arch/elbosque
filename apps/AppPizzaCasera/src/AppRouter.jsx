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

  const pantallas = [
    { id: "bienvenida", componente: <Bienvenida siguiente={() => setIndice(1)} /> },
    { id: "pizzas", componente: <Pizzas agregarAlCarrito={producto => setCarrito([...carrito, producto])} /> },
    { id: "ensaladas", componente: <Ensaladas agregarAlCarrito={producto => setCarrito([...carrito, producto])} /> },
    { id: "complementos", componente: <Complementos agregarAlCarrito={producto => setCarrito([...carrito, producto])} /> },
    { id: "bebidas", componente: <Bebidas agregarAlCarrito={producto => setCarrito([...carrito, producto])} /> },
    { id: "finalizacion", componente: <Finalizacion carrito={carrito} /> },
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

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw" }}>
      {/* Contenido principal */}
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: "80px" }}>
        {pantalla}
      </div>

      {/* Botones de navegación */}
      {!showUserForm && indice > 0 && (
        <button
          onClick={() => setIndice(indice - 1)}
          style={{
            position: "fixed",
            bottom: "80px",
            left: "20px",
            padding: "12px 24px",
            backgroundColor: "#128343",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            zIndex: 50,
          }}
        >
          ← Anterior
        </button>
      )}

      {!showUserForm && indice < pantallas.length - 1 && (
        <button
          onClick={() => setIndice(indice + 1)}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            padding: "12px 24px",
            backgroundColor: "#128343",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            zIndex: 50,
          }}
        >
          Siguiente →
        </button>
      )}

      {/* Barra de navegación inferior */}
      <nav
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "62px",
          background: "#fffdfa",
          borderTop: "1.5px solid #e6e0d0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          zIndex: 100,
        }}
      >
        <button onClick={() => setIndice(0)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "13px", color: indice === 0 ? "#128343" : "#888", fontWeight: indice === 0 ? "700" : "500" }}>
          🏠 Inicio
        </button>
        <button onClick={() => setIndice(1)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "13px", color: indice === 1 ? "#128343" : "#888", fontWeight: indice === 1 ? "700" : "500" }}>
          🔍 Buscar
        </button>
        <button onClick={() => setIndice(5)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "13px", color: indice === 5 ? "#128343" : "#888", fontWeight: indice === 5 ? "700" : "500" }}>
          🛒 Carrito
        </button>
        <button onClick={() => setPerfilAbierto(true)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", fontSize: "13px", color: "#888", fontWeight: "500" }}>
          👤 Perfil
        </button>
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
