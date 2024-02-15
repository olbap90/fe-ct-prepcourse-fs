function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
    if (a > b) {
      return "Error: 'a' debe ser menor o igual a 'b'.";
    }
  
    let producto = 1;
  
    for (let i = a; i <= b; i++) {
      producto *= i;
    }
  
    // Convertir -0 a 0
    return producto === 0 ? 0 : producto;
}

module.exports = productoEntreNúmeros;