
import React, { useState, useEffect } from "react";

export default function PerfilModal({ open, onClose, onEdit, onLogout, userData }) {
  const [datos, setDatos] = useState(userData || {});

  useEffect(() => {
    if (!open) return; // Nunca llamar setState si el modal está cerrado
    if (userData && JSON.stringify(datos) !== JSON.stringify(userData)) {
      setDatos(userData);
    } else if (!userData && Object.keys(datos).length > 0) {
      setDatos({});
    }
    // eslint-disable-next-line
  }, [userData, open]);

  if (!open) return null;

  const handleChange = e => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSave = e => {
    e.preventDefault();
    if (onEdit) onEdit(datos);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.18)', zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        background: '#fffdfa', borderRadius: 16, boxShadow: '0 4px 24px #0002',
        padding: 32, minWidth: 320, maxWidth: 380, width: '100%',
        border: '1.5px solid #e6e0d0', position: 'relative',
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#888', cursor: 'pointer', padding: '0 6px' }} aria-label="Cerrar">×</button>
        <h2 style={{ color: '#105652', fontWeight: 800, fontSize: '1.3rem', marginBottom: 18, textAlign: 'center' }}>Mi perfil</h2>
        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input name="nombre" value={datos.nombre} onChange={handleChange} placeholder="Nombre completo" required style={{...inputStyle, textTransform: 'capitalize'}} />
          <input name="telefono" value={datos.telefono} onChange={handleChange} placeholder="Teléfono" required style={inputStyle} />
          <input name="email" type="email" value={datos.email} onChange={handleChange} placeholder="Email" required style={inputStyle} />
          <input name="direccion" value={datos.direccion} onChange={handleChange} placeholder="Dirección" required style={{...inputStyle, textTransform: 'capitalize'}} />
          <input name="ciudad" value={datos.ciudad} onChange={handleChange} placeholder="Ciudad" required style={{...inputStyle, textTransform: 'capitalize'}} />
          <input name="cp" value={datos.cp} onChange={handleChange} placeholder="Código Postal" required style={inputStyle} />
          <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
            <button type="submit" style={{ flex: 1, background: '#128343', color: '#fff', border: 'none', borderRadius: 8, padding: 10, fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer' }}>Guardar</button>
            <button type="button" onClick={onLogout} style={{ flex: 1, background: '#fff', color: '#128343', border: '1.5px solid #128343', borderRadius: 8, padding: 10, fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer' }}>Cerrar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 4,
  padding: 10,
  borderRadius: 7,
  border: '1.2px solid #b2b2b2',
  fontSize: '1rem',
  background: '#fbf3e4',
  color: '#105652',
};
