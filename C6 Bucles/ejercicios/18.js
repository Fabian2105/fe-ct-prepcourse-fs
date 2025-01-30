function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  const inicio = Math.min(a, b);
  const fin = Math.max(a, b);
  
  let producto = 1;
  for (let i = inicio; i <= fin; i++) {
    producto *= i;
  }
  return producto ===  0 ? +0 : producto; 
}

module.exports = productoEntreNúmeros;