function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var textoSpliteado = texto.split('');
  var LetrasInvertido = textoSpliteado.reverse();
  var textoInvertido = LetrasInvertido.join('')
  return textoInvertido;
}

module.exports = invertirTexto;