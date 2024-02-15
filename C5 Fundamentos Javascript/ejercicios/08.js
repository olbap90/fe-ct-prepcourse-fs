function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  if (typeof numero !== 'number' || isNaN(numero)) {
    return false;
  }
  return numero % 1 === 0;
}

module.exports = esNumeroEntero;