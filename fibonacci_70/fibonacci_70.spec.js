const fibonacci_70 = require('./fibonacci_70');

// [0,1,1,2,3,5,8,13]

test('input value of 5', () => {
  expect(fibonacci_70(5)).toEqual(5);
});

test('input value of 7', () => {
  expect(fibonacci_70(7)).toEqual(13);
});
