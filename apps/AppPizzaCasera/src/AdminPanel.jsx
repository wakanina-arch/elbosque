import React, { useState } from "react";

// Datos de ejemplo, normalmente vendrían de un JSON o backend
const initialProducts = [
  { id: 1, nombre: "Pizza Margherita", precio: 8.99, promo: "", imagen: "" },
  { id: 2, nombre: "Pizza Pepperoni", precio: 9.99, promo: "", imagen: "" },
  { id: 3, nombre: "Ensalada César", precio: 6.99, promo: "", imagen: "" },
];

export default function AdminPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [nuevo, setNuevo] = useState({ nombre: "", precio: "", promo: "", imagen: "" });

  const handleChange = (i, field, value) => {
    const updated = [...products];
    updated[i][field] = value;
    setProducts(updated);
  };

  const handleNuevoChange = (field, value) => {
    setNuevo({ ...nuevo, [field]: value });
  };

  const addProduct = () => {
    setProducts([...products, { ...nuevo, id: Date.now() }]);
    setNuevo({ nombre: "", precio: "", promo: "", imagen: "" });
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", background: "#fffdfa", borderRadius: 12, boxShadow: "0 2px 12px #0002", padding: 24 }}>
      <h2>Panel de Administración</h2>
      <table style={{ width: "100%", marginBottom: 24 }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Promo/Descuento</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={p.id}>
              <td><input value={p.nombre} onChange={e => handleChange(i, "nombre", e.target.value)} /></td>
              <td><input type="number" value={p.precio} onChange={e => handleChange(i, "precio", e.target.value)} style={{ width: 70 }} /></td>
              <td><input value={p.promo} onChange={e => handleChange(i, "promo", e.target.value)} placeholder="Ej: 2x1, -10%" /></td>
              <td><input value={p.imagen} onChange={e => handleChange(i, "imagen", e.target.value)} placeholder="URL o nombre archivo" /></td>
              <td><button onClick={() => removeProduct(p.id)} style={{ color: "#b00" }}>Eliminar</button></td>
            </tr>
          ))}
          <tr>
            <td><input value={nuevo.nombre} onChange={e => handleNuevoChange("nombre", e.target.value)} placeholder="Nuevo producto" /></td>
            <td><input type="number" value={nuevo.precio} onChange={e => handleNuevoChange("precio", e.target.value)} style={{ width: 70 }} /></td>
            <td><input value={nuevo.promo} onChange={e => handleNuevoChange("promo", e.target.value)} placeholder="Promo" /></td>
            <td><input value={nuevo.imagen} onChange={e => handleNuevoChange("imagen", e.target.value)} placeholder="Imagen" /></td>
            <td><button onClick={addProduct} style={{ color: "#128343" }}>Añadir</button></td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: 13, color: "#888" }}>* Los cambios aquí son locales. Para guardar permanentemente, deberías conectar con backend o guardar en archivo JSON.</p>
    </div>
  );
}
