import React, { useState } from "react";
import "./Finalizacion.css";

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");

  // Detecta el tipo de tarjeta según el número
  function detectCardType(number) {
    if (/^4/.test(number)) return "Visa";
    if (/^5[1-5]/.test(number)) return "MasterCard";
    if (/^3(?:0[0-5]|[68])/.test(number)) return "Diners";
    return "";
  }

  // Formatea el número de tarjeta con espacios cada 4 dígitos y detecta tipo
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Solo dígitos
    value = value.substring(0, 16); // Máximo 16 dígitos
    let formatted = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formatted);
    setCardType(detectCardType(value));
  };

  return (
    <div className="payment-form-card">
      <h3>Datos de Pago</h3>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardName">Nombre en la tarjeta</label>
          <input type="text" id="cardName" name="cardName" placeholder="Nombre completo" required />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Número de tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            required
            value={cardNumber}
            onChange={handleCardNumberChange}
            inputMode="numeric"
            autoComplete="cc-number"
          />
          {cardType && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              color: '#105652',
              fontWeight: 600,
              marginTop: 6,
              fontSize: '1.05rem',
              background: '#f3f9f8',
              borderRadius: 6,
              padding: '2px 10px',
              width: 'fit-content',
              boxShadow: '0 1px 4px #0001'
            }}>
              {cardType === 'Visa' && (
                <svg width="28" height="18" viewBox="0 0 28 18" style={{marginRight: 8}}><rect width="28" height="18" rx="3" fill="#fff" stroke="#105652" strokeWidth="1.5"/><text x="14" y="13" textAnchor="middle" fontSize="10" fill="#105652" fontWeight="bold">VISA</text></svg>
              )}
              {cardType === 'MasterCard' && (
                <svg width="28" height="18" viewBox="0 0 28 18" style={{marginRight: 8}}><rect width="28" height="18" rx="3" fill="#fff" stroke="#105652" strokeWidth="1.5"/><circle cx="11" cy="9" r="5" fill="#ff5f00"/><circle cx="17" cy="9" r="5" fill="#eb001b"/><text x="14" y="14" textAnchor="middle" fontSize="7" fill="#105652" fontWeight="bold">MC</text></svg>
              )}
              {cardType === 'Diners' && (
                <svg width="28" height="18" viewBox="0 0 28 18" style={{marginRight: 8}}><rect width="28" height="18" rx="3" fill="#fff" stroke="#105652" strokeWidth="1.5"/><circle cx="14" cy="9" r="5" fill="#0079be"/><text x="14" y="13" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">D</text></svg>
              )}
              {cardType}
            </div>
          )}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Vencimiento</label>
            <input type="text" id="expiry" name="expiry" placeholder="MM/AA" maxLength="5" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" name="cvc" placeholder="123" maxLength="4" required />
          </div>
        </div>
        <button type="submit" className="checkout-btn">Pagar</button>
      </form>
    </div>
  );
}
