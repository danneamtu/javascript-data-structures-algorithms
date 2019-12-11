// Time complexity of O(n) - Where n is the length of the input array.
// Space complexity of O(1) - Since no additional data structures were used.

const maxSumOfSubarrayOfSizeK = (k, arr) => {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      if (windowSum > maxSum) {
        maxSum = windowSum;
      }

      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
};

console.log(maxSumOfSubarrayOfSizeK(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(maxSumOfSubarrayOfSizeK(2, [2, 3, 4, 1, 5])); // 7
