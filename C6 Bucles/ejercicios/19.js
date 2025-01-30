function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  return (n * (n + 1)) / 2;

  /*let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;

  Esta es otra forma de hacerlo con bucle pero el otro es mas eficiente
  */
}

module.exports = sumarHastaN;
