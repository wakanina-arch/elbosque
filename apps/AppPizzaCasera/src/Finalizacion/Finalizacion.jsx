import React, { useRef } from "react";
import "./Finalizacion.css";
import PaymentForm from "./PaymentForm";


export default function Finalizacion({ carrito }) {
  // El subtotal es la suma de todos los productos del carrito
  const subtotal = carrito.reduce((acc, prod) => acc + (prod.precio || 0), 0);
  const pagoRef = useRef(null);

  const scrollToPago = () => {
    if (pagoRef.current) {
      pagoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="finalizacion-container">
      <h2>Finaliza tu Pedido</h2>
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
                    <span>$10.00</span>
                    <span>Impuestos:</span>
                    <span>$30.40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card checkout">
            <div className="footer">
              <label className="price">${(subtotal + 10 + 30.4).toFixed(2)}</label>
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