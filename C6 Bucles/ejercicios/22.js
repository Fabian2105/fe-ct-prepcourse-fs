function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  let contador = 0;
  do {
    num += 5; // Incrementamos num en 5
    contador++; // Incrementamos el contador
  } while (contador < 8); // Se repite mientras el contador sea menor que 8

  return num; // Retornamos el valor final de num
}

module.exports = doWhile;