import React, { useRef, useState } from "react";
import "./Finalizacion.css";
import PaymentForm from "./PaymentForm";




// Tabla de IVA por país (puedes ampliar según necesidad)
const IVA_PAISES = {
  Ecuador: 0.15,
  Colombia: 0.19,
  México: 0.16,
  Chile: 0.19,
  Argentina: 0.21,
  Perú: 0.18,
  España: 0.10, // alimentos preparados
  Otro: 0.15
};
const ENVIO = 2.5;

export default function Finalizacion({ carrito }) {
  // Estado para país seleccionado
  const [pais, setPais] = useState('Ecuador');
  // El subtotal es la suma de todos los productos del carrito
  const subtotal = carrito.reduce((acc, prod) => acc + (prod.precio || 0), 0);
  const IVA_PORCENTAJE = IVA_PAISES[pais] || IVA_PAISES['Otro'];
  const impuestos = subtotal * IVA_PORCENTAJE;
  const pagoRef = useRef(null);

  const scrollToPago = () => {
    if (pagoRef.current) {
      pagoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="finalizacion-container">
      <h2>Finaliza tu Pedido</h2>
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 600, marginRight: 8 }}>País:</label>
        <select value={pais} onChange={e => setPais(e.target.value)} style={{ fontSize: '1rem', padding: '2px 8px', borderRadius: 6 }}>
          {Object.keys(IVA_PAISES).map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <span style={{ marginLeft: 10, color: '#888', fontSize: '0.95rem' }}>
          IVA: {(IVA_PORCENTAJE * 100).toFixed(0)}%
        </span>
      </div>
      <div className="finalizacion-superior">
        <div className="container">
          <div className="card cart">
            <label className="title">RESUMEN DE PEDIDO</label>
            <div className="steps">
              <div className="step">
                <div>
                  <div className="ticket-compra-box">
                    <div className="ticket-title">TICKET DE COMPRA</div>
                    {carrito.length === 0 && (
                      <div className="ticket-alert">No hay productos en el carrito.</div>
                    )}
                    {carrito.map((prod, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '1rem', marginBottom: 4 }}>
                        <span>{prod.nombre}</span>
                        <span style={{ fontWeight: 600 }}>${prod.precio?.toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="ticket-total">
                      <label className="price small">Total: ${subtotal.toFixed(2)}</label>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <span>METODO DE PAGO</span>
                  <p>Visa / Mastercard / Diners</p>
                  <p>**** **** **** 4243</p>
                </div>
                <hr />
                <div className="promo">
                  <span>¿TIENES UN CÓDIGO PROMOCIONAL?</span>
                  <form className="form">
                    <input type="text" placeholder="Ingresa un código promocional" className="input_field" />
                    <button type="button">Aplicar</button>
                  </form>
                </div>
                <hr />
                <div className="payments">
                  <span>PAGO</span>
                  <div className="details">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                    <span>Envío:</span>
                    <span>${ENVIO.toFixed(2)}</span>
                    <span>Impuestos (IVA {Math.round(IVA_PORCENTAJE*100)}%):</span>
                    <span>${impuestos.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card checkout">
            <div className="footer">
              <label className="price">${(subtotal + ENVIO + impuestos).toFixed(2)}</label>
              <button className="checkout-btn" onClick={scrollToPago}>Finalizar Pedido</button>
            </div>
          </div>
        </div>
      </div>
      {/* Bloque 2: Formulario de pago */}
      <div className="finalizacion-inferior" ref={pagoRef} style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>
        <PaymentForm />
      </div>
    </div>
  );
}