function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  // Verificamos si el número tiene divisores distintos de 1 y sí mismo
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Si encontramos un divisor, no es primo
    }
  }

  // Si no se encontraron divisores, el número es primo
  return true;
}

module.exports = esNumeroPrimo;
