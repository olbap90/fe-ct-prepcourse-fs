function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const arrayMayus = array.map(cadena => cadena.toUpperCase());
  return arrayMayus;
}

module.exports = convertirStringAMayusculas;
