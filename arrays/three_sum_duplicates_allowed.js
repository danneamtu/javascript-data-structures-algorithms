/*
 * Complete the 'threeNumberSum' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER target
 */

function threeNumberSum(arr, target) {
  arr.sort((a, b) => a - b);

  const triplets = [];

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left += 1;
        right -= 1;
      } else if (sum < target) {
        left += 1;
      } else if (sum > target) {
        right -= 1;
      }
    }
  }

  return triplets;
}
