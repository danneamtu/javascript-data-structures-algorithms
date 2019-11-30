const {arrayToSubArrays} = require('./arrayToSubArrays');

test('function chunk exists', () => {
  expect(typeof arrayToSubArrays).toEqual('function');
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = arrayToSubArrays(arr, 2);

  expect(result).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const result = arrayToSubArrays(arr, 1);

  expect(result).toEqual([[1], [2], [3]]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const result = arrayToSubArrays(arr, 3);

  expect(result).toEqual([
    [1, 2, 3],
    [4, 5],
  ]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const result = arrayToSubArrays(arr, 5);

  expect(result).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13],
  ]);
});
