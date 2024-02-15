function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  const numerosMayoresA10 = array.filter(numero => numero > 10);
  return numerosMayoresA10.length;
}

module.exports = contarElementosMayoresA10;
