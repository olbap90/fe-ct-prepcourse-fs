function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  const resultado = arrayOfNums.reduce((elemento1, elemento2) => elemento1 + elemento2, 0);
  return resultado;
}

module.exports = agregarNumeros;
