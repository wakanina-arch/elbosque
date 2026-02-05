import React, { useState, useEffect } from "react";

const camposIniciales = {
  nombre: "",
  telefono: "",
  email: "",
  direccion: "",
  ciudad: "",
  cp: ""
};

export default function UserDataForm({ onSave }) {
  const [datos, setDatos] = useState(camposIniciales);
  const [guardado, setGuardado] = useState(false);

  useEffect(() => {
    // Cargar datos guardados si existen
    const saved = localStorage.getItem("userData");
    if (saved) setDatos(JSON.parse(saved));
  }, []);

  const handleChange = e => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(datos));
    setGuardado(true);
    if (onSave) onSave(datos);
  };

  return (
    <div style={{ maxWidth: 420, margin: "2.5rem auto", background: "#fffdfa", borderRadius: 16, boxShadow: "0 4px 24px #0002", padding: 32, border: '1.5px solid #e6e0d0' }}>
      <h2 style={{ color: '#105652', fontWeight: 800, fontSize: '1.5rem', marginBottom: 24, textAlign: 'center', letterSpacing: 1 }}>Datos personales</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label style={{ fontWeight: 600, color: '#222', marginBottom: 2 }}>Nombre completo
          <input name="nombre" value={datos.nombre} onChange={handleChange} placeholder="Nombre completo" required style={{ width: "100%", marginTop: 4, padding: 10, borderRadius: 7, border: '1.2px solid #b2b2b2', fontSize: '1rem', background: '#fbf3e4', color: '#105652', textTransform: 'capitalize' }} />
        </label>
        <label style={{ fontWeight: 600, color: '#222', marginBottom: 2 }}>Teléfono
          <input name="telefono" value={datos.telefono} onChange={handleChange} placeholder="Teléfono" required style={{ width: "100%", marginTop: 4, padding: 10, borderRadius: 7, border: '1.2px solid #b2b2b2', fontSize: '1rem', background: '#fbf3e4', color: '#105652' }} />
        </label>
        <label style={{ fontWeight: 600, color: '#222', marginBottom: 2 }}>Email
          <input name="email" type="email" value={datos.email} onChange={handleChange} placeholder="Email" required style={{ width: "100%", marginTop: 4, padding: 10, borderRadius: 7, border: '1.2px solid #b2b2b2', fontSize: '1rem', background: '#fbf3e4', color: '#105652' }} />
        </label>
        <label style={{ fontWeight: 600, color: '#222', marginBottom: 2 }}>Dirección
          <input name="direccion" value={datos.direccion} onChange={handleChange} placeholder="Dirección" required style={{ width: "100%", marginTop: 4, padding: 10, borderRadius: 7, border: '1.2px solid #b2b2b2', fontSize: '1rem', background: '#fbf3e4', color: '#105652', textTransform: 'capitalize' }} />
        </label>
        <label style={{ fontWeight: 600, color: '#222', marginBottom: 2 }}>Ciudad
          <input name="ciudad" value={datos.ciudad} onChange={handleChange} placeholder="Ciudad" required style={{ width: "100%", marginTop: 4, padding: 10, borderRadius: 7, border: '1.2px solid #b2b2b2', fontSize: '1rem', background: '#fbf3e4', color: '#105652', textTransform: 'capitalize' }} />
        </label>
        <label style={{ fontWeight: 600, color: '#222', marginBottom: 2 }}>Código Postal
          <input name="cp" value={datos.cp} onChange={handleChange} placeholder="Código Postal" required style={{ width: "100%", marginTop: 4, padding: 10, borderRadius: 7, border: '1.2px solid #b2b2b2', fontSize: '1rem', background: '#fbf3e4', color: '#105652' }} />
        </label>
        <button type="submit" style={{ width: "100%", background: "#128343", color: "#fff", border: "none", borderRadius: 8, padding: 12, fontWeight: 700, fontSize: '1.1rem', marginTop: 8, boxShadow: '0 2px 8px #0001', transition: 'background 0.2s' }}>Guardar datos</button>
      </form>
      {guardado && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          background: '#e6fbe7',
          border: '1.5px solid #128343',
          borderRadius: 8,
          padding: '12px 18px',
          marginTop: 22,
          boxShadow: '0 2px 8px #0001',
          fontWeight: 600,
          color: '#128343',
          fontSize: '1.08rem',
          transition: 'all 0.3s'
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="12" fill="#128343" opacity="0.15"/>
            <path d="M7 13.5l3 3 7-7" stroke="#128343" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          ¡Datos guardados correctamente!
        </div>
      )}
    </div>
  );
}
