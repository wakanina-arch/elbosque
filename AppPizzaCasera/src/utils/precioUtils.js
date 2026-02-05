// src/utils/precioUtils.js

// Resta una cantidad al precio en formato string "$12.99"
export function restarPrecio(valor, cantidad) {
  const num = parseFloat(valor.replace(/[^\d.]/g, ''));
  return `$${(num - cantidad).toFixed(2)}`;
}

// Ejemplo de uso:
// restarPrecio("$12.99", 2) => "$10.99"
// restarPrecio("$7.99", 1) => "$6.99"
