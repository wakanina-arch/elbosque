import React, { useState } from "react";
import "./AdminPanel.css";

// Datos de ejemplo por categoría
const initialProducts = {
  Pizzas: [
    { id: 1, nombre: "Pizza Margherita", precio: 8.99, promo: "", imagen: "", tamaños: ["Pequeña", "Mediana", "Grande"] },
    { id: 2, nombre: "Pizza Pepperoni", precio: 9.99, promo: "", imagen: "", tamaños: ["Pequeña", "Mediana", "Grande"] },
  ],
  Ensaladas: [
    { id: 3, nombre: "Ensalada César", precio: 6.99, promo: "", imagen: "", tamaños: ["Normal"] },
  ],
  Bebidas: [
    { id: 4, nombre: "Refresco", precio: 2.99, promo: "", imagen: "", tamaños: ["Pequeño", "Grande"] },
  ],
};

export default function AdminPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });
  const [cambiosPendientes, setCambiosPendientes] = useState(false);

  // Mostrar mensaje temporal
  const mostrarMensaje = (tipo, texto) => {
    setMensaje({ tipo, texto });
    setTimeout(() => setMensaje({ tipo: "", texto: "" }), 3000);
  };

  // Abrir modal de edición
  const abrirEdicion = (categoria, producto) => {
    setEditingId(producto.id);
    setEditData({ ...producto, categoria });
  };

  // Guardar cambios de edición
  const guardarEdicion = () => {
    if (!editData.nombre.trim()) {
      mostrarMensaje("error", "El nombre del producto no puede estar vacío");
      return;
    }
    if (editData.precio <= 0) {
      mostrarMensaje("error", "El precio debe ser mayor a 0");
      return;
    }

    const nuevosProductos = { ...products };
    const productoActual = nuevosProductos[editData.categoria].find(p => p.id === editingId);
    Object.assign(productoActual, editData);
    
    setProducts(nuevosProductos);
    setEditingId(null);
    setEditData(null);
    setCambiosPendientes(true);
    mostrarMensaje("exito", "Producto actualizado");
  };

  // Cancelar edición
  const cancelarEdicion = () => {
    setEditingId(null);
    setEditData(null);
  };

  // Eliminar producto con confirmación
  const eliminarProducto = (categoria, id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      const nuevosProductos = { ...products };
      nuevosProductos[categoria] = nuevosProductos[categoria].filter(p => p.id !== id);
      setProducts(nuevosProductos);
      setCambiosPendientes(true);
      mostrarMensaje("exito", "Producto eliminado");
    }
  };

  // Duplicar producto
  const duplicarProducto = (categoria, producto) => {
    const nuevosProductos = { ...products };
    const productoDuplicado = {
      ...producto,
      id: Date.now(),
      nombre: `${producto.nombre} (copia)`,
    };
    nuevosProductos[categoria].push(productoDuplicado);
    setProducts(nuevosProductos);
    setCambiosPendientes(true);
    mostrarMensaje("exito", "Producto duplicado");
  };

  // Agregar producto nuevo
  const agregarProducto = (categoria) => {
    const nuevosProductos = { ...products };
    const nuevoProducto = {
      id: Date.now(),
      nombre: `Nuevo producto`,
      precio: 0,
      promo: "",
      imagen: "",
      tamaños: ["Normal"],
    };
    nuevosProductos[categoria].push(nuevoProducto);
    setProducts(nuevosProductos);
    setCambiosPendientes(true);
    mostrarMensaje("exito", "Producto agregado a " + categoria);
  };

  // Guardar cambios (simulado - aquí irían al backend)
  const guardarTodos = () => {
    // Aquí conectarías con tu backend
    console.log("Guardando cambios:", products);
    mostrarMensaje("exito", "¡Todos los cambios guardados correctamente!");
    setCambiosPendientes(false);
  };

  return (
    <div className="admin-panel-container">
      <div className="admin-panel">
        {/* Header */}
        <div className="admin-header">
          <div>
            <h1>⚙️ Panel de Administración</h1>
            <p className="admin-subtitle">Gestiona productos, precios y promociones</p>
          </div>
          {cambiosPendientes && (
            <button className="btn-guardar-principal" onClick={guardarTodos}>
              💾 Guardar Todos los Cambios
            </button>
          )}
        </div>

        {/* Mensajes */}
        {mensaje.texto && (
          <div className={`admin-mensaje admin-mensaje-${mensaje.tipo}`}>
            {mensaje.tipo === "exito" && "✅"} 
            {mensaje.tipo === "error" && "❌"}
            {mensaje.texto}
          </div>
        )}

        {/* Indicador de cambios pendientes */}
        {cambiosPendientes && (
          <div className="admin-alerta-pendientes">
            ⚠️ Tienes cambios sin guardar
          </div>
        )}

        {/* Contenido de categorías */}
        <div className="admin-categorias">
          {Object.entries(products).map(([categoria, productosList]) => (
            <section key={categoria} className="admin-seccion">
              <div className="admin-seccion-header">
                <h2>{categoria}</h2>
                <button 
                  className="btn-agregar-categoria"
                  onClick={() => agregarProducto(categoria)}
                  title="Agregar nuevo producto a esta categoría"
                >
                  ➕ Agregar Producto
                </button>
              </div>

              <div className="admin-productos-grid">
                {productosList.map((producto) => (
                  <div
                    key={producto.id}
                    className={`admin-producto-card ${editingId === producto.id ? "editando" : ""}`}
                  >
                    {/* Imagen Preview */}
                    <div className="admin-producto-imagen">
                      {producto.imagen ? (
                        <img src={producto.imagen} alt={producto.nombre} />
                      ) : (
                        <div className="admin-imagen-placeholder">
                          🖼️ Sin imagen
                        </div>
                      )}
                    </div>

                    {/* Información */}
                    <div className="admin-producto-info">
                      <h3>{producto.nombre}</h3>
                      <div className="admin-precio-promo">
                        <span className="admin-precio">${producto.precio.toFixed(2)}</span>
                        {producto.promo && (
                          <span className="admin-promo">{producto.promo}</span>
                        )}
                      </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="admin-producto-acciones">
                      <button
                        className="btn-icono btn-editar"
                        onClick={() => abrirEdicion(categoria, producto)}
                        title="Editar producto"
                      >
                        ✏️
                      </button>
                      <button
                        className="btn-icono btn-duplicar"
                        onClick={() => duplicarProducto(categoria, producto)}
                        title="Duplicar producto"
                      >
                        📋
                      </button>
                      <button
                        className="btn-icono btn-eliminar"
                        onClick={() => eliminarProducto(categoria, producto.id)}
                        title="Eliminar producto"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Modal de Edición */}
      {editingId && editData && (
        <div className="admin-modal-overlay" onClick={cancelarEdicion}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Editar Producto</h2>
              <button className="btn-cerrar-modal" onClick={cancelarEdicion}>✕</button>
            </div>

            <div className="admin-modal-contenido">
              {/* Lado izquierdo: Imagen */}
              <div className="admin-modal-imagen">
                {editData.imagen ? (
                  <img src={editData.imagen} alt={editData.nombre} />
                ) : (
                  <div className="admin-imagen-placeholder-grande">
                    🖼️ Vista previa
                  </div>
                )}
              </div>

              {/* Lado derecho: Formulario */}
              <div className="admin-modal-formulario">
                <div className="admin-campo">
                  <label>Nombre del Producto</label>
                  <input
                    type="text"
                    value={editData.nombre}
                    onChange={(e) => setEditData({ ...editData, nombre: e.target.value })}
                    placeholder="Ej: Pizza Margherita"
                  />
                </div>

                <div className="admin-campo">
                  <label>Precio ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={editData.precio}
                    onChange={(e) => setEditData({ ...editData, precio: parseFloat(e.target.value) || 0 })}
                    placeholder="Ej: 8.99"
                  />
                </div>

                <div className="admin-campo">
                  <label>Promoción / Descuento</label>
                  <input
                    type="text"
                    value={editData.promo}
                    onChange={(e) => setEditData({ ...editData, promo: e.target.value })}
                    placeholder="Ej: 2x1, -10%, Descuento"
                  />
                </div>

                <div className="admin-campo">
                  <label>URL de Imagen</label>
                  <input
                    type="text"
                    value={editData.imagen}
                    onChange={(e) => setEditData({ ...editData, imagen: e.target.value })}
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                  <small>Pega el enlace de la imagen aquí</small>
                </div>

                <div className="admin-modal-botones">
                  <button
                    className="btn-cancelar"
                    onClick={cancelarEdicion}
                  >
                    ❌ Cancelar
                  </button>
                  <button
                    className="btn-guardar"
                    onClick={guardarEdicion}
                  >
                    ✓ Guardar Cambios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
