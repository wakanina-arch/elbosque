export function restarDolares(precio, cantidad = 2) {
  const numeral = parseFloat(precio.replace(/[^\d.]/g, ''));
  const resultado = numeral - cantidad;
  return '$' + Math.max(resultado, 0).toFixed(2);
}

export function obtenerPrecioNumerico(precioString) {
  return parseFloat(precioString.replace(/[^\d.]/g, ''));
}

export function formatearPrecio(numero) {
  return '$' + numero.toFixed(2);
}

export const IVA_PAISES = {
  Ecuador: 0.15,
  Colombia: 0.19,
  México: 0.16,
  Chile: 0.19,
  Argentina: 0.21,
  Perú: 0.18,
  España: 0.10,
  Otro: 0.15
};
