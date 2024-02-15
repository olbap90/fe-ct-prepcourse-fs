function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  do {
    if (mes < 1 || mes > 12) {
      return 0;
      mes = obtenerNumeroDeMesDesdeElUsuario();
    }
  } while (mes < 1 || mes > 12);
  const diasPorMes = [31,28,31,30,31,30,31,31,30,31,30,31];
  return diasPorMes[mes - 1];
}

module.exports = diasEnMes;
