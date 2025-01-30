function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:

   // Verificamos si se recibe un callback y que sea una función
  if (typeof callback === "function") {
   return callback(string); // Aplicamos el callback al string y devolvemos el resultado
 }
 // Si no se recibe un callback válido, devolvemos el string original
 return string;
}

module.exports = cambiarCadena;
