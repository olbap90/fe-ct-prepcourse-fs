function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort(function(a, b) {
    return a - b;
  });
}

module.exports = ordenarArray;
