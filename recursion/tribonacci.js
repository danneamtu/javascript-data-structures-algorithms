// Time complexity O(n ^ 3) - Where n is the size of the input number.
// Space complexity O(3) - 3 is the length of the array to hold the sum of the previous 3 elements.

const tribonacci = (n, arr = [0, 1, 1]) => {
  if (n < 0) {
    return 0;
  }

  if (arr[n]) {
    return arr[n];
  } else {
    arr[n] =
      tribonacci(n - 1, arr) + tribonacci(n - 2, arr) + tribonacci(n - 3, arr);
  }

  return arr[n];
};
