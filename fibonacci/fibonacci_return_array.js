/*
 * Complete the 'fibonacci' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER n as parameter.
 */

function fibonacci(n) {
  let arr = [0, 1];

  if (n === 2) {
    return arr;
  } else if (n == 1) {
    return [0];
  } else if (n === 0 || !n) {
    return [];
  }

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}
