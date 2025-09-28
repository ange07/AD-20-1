const calculator = require('./calculator');

//Pruebas originales

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});


// Tarea 1. 2 pruebas unitarias para la función multiply
describe('multiply', () => {
  test('debería multiplicar 5 por 4 y devolver 20', () => {
    expect(calculator.multiply(5, 4)).toBe(20);
  });

  test('debería multiplicar 10 por 0 y devolver 0', () => {
    expect(calculator.multiply(10, 0)).toBe(0);
  });
});

  // Tarea 1. 2 pruebas unitarias para la función divide
describe('divide', () => {
  test('debería dividir 10 entre 2 y devolver 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('debería dividir 7 entre 2 y devolver 3.5', () => {
    expect(calculator.divide(7, 2)).toBe(3.5);
  });
});


// Tarea 3: test división por cero

test('divide() debería lanzar un error al dividir por cero', () => {
  expect(() => calculator.divide(10, 0)).toThrow('No es posible dividir por cero');
});