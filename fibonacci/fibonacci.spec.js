const fibonacci = require('./fibonacci');

test('fibonacci function is defined', () => {
  expect(typeof fibonacci).toEqual('function');
});

test('calculates correct fibonacci value for 1', () => {
  expect(fibonacci(1)).toEqual(1);
});

test('calculates correct fibonacci value for 2', () => {
  expect(fibonacci(2)).toEqual(1);
});

test('calculates correct fibonacci value for 3', () => {
  expect(fibonacci(3)).toEqual(2);
});

test('calculates correct fibonacci value for 4', () => {
  expect(fibonacci(4)).toEqual(3);
});

test('calculates correct fibonacci value for 39', () => {
  expect(fibonacci(39)).toEqual(63245986);
});