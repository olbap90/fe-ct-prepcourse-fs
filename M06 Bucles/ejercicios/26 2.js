function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  const str1sinEspacios = str1.toLowerCase().replace(/\s/g, '');
  const str2sinEspacios = str2.toLowerCase().replace(/\s/g, '');
  const str1Ordenado = str1sinEspacios.split('').sort().join('');
  const str2Ordenado = str2sinEspacios.split('').sort().join('');
  return str1Ordenado === str2Ordenado;
}

module.exports = esAnagrama;
