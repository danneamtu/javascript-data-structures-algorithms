// Time complexity of O(n^2) - Where n is the length of the array.
// Space complexity of O(n) - Where n is the length of the results array.

const threeSum = (numsArray) => {
  const target = 0;
  const triplets = [];

  numsArray.sort((a, b) => a - b);

  for (let i = 0; i < numsArray.length - 2; i++) {
    if (i > 0 && numsArray[i] === numsArray[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = numsArray.length - 1;

    while (left < right) {
      let sum = numsArray[i] + numsArray[left] + numsArray[right];

      if (sum === target) {
        triplets.push([numsArray[i], numsArray[left], numsArray[right]]);
        while (numsArray[left] === numsArray[left + 1]) {
          left += 1;
        }
        while (numsArray[right] === numsArray[right - 1]) {
          right -= 1;
        }
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

console.log(threeSum([-2, 0, 0, 2, 2])); // [ [-2, 0, 2 ] ]
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [ [-1, -1, 2 ], [-1, 0, 1] ]
