function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' && array[i].length > 5) {
      return array[i]
    }
  }
  return null
}
var array = [1, 'abc', 'defgh', 2, 'ijklm', 'nop'];
var primerStringLargo = obtenerPrimerStringLargo(array);
console.log(primerStringLargo); // Imprimirá 'defgh'

module.exports = obtenerPrimerStringLargo;
