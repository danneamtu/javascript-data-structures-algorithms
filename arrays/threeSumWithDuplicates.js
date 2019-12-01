// Time complexity of O(n^2) - Where n is the length of the array.
// Space complexity of O(n) - where n is the length of the results array.

const threeNumberSum = (arr, target) => {
  arr.sort((a, b) => a - b); // O(n log n)

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
};
