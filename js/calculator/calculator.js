const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  // Tarea 3. Corregir la función para que la prueba pase al dividir por 0
  if (b === 0) {
    throw new Error("No es posible dividir por cero");
  }
  return a / b;
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};