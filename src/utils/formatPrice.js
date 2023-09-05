// util.js
export function formatPrice(price) {
    // Dividir el precio por 100 y luego formatear como MXN y dos decimales
    const formattedPrice = new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 2,
    }).format(price / 100);
  
    return `MXN ${formattedPrice}`;
  }
  