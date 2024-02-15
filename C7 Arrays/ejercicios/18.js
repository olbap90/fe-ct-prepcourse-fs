function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length === 0) {
    return 0;
  }
  const suma = resultadosTest.reduce((elemento1,elemento2) => elemento1 + elemento2,0);
  const promedio = suma / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
