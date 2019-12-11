// Time complexity of O(n + n) - Where n is the length of the input array and n is the element processed in prev siliding window.
// Space complexity of O(1) - Since there were no additional data structures used.

const smallestSubarrayLengthWithGivenSum = function(s, arr) {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // keep adding to the current window
    windowSum += arr[windowEnd];

    // shorten window until windowSum is not greater or equal than sum.
    while (windowSum >= s) {
      // windowEnd - windowStart + 1 - is the current window size.
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return minLength;
};

console.log(smallestSubarrayLengthWithGivenSum(7, [2, 1, 5, 2, 3, 2])); // 2
console.log(smallestSubarrayLengthWithGivenSum(7, [2, 1, 5, 2, 8])); // 1
console.log(smallestSubarrayLengthWithGivenSum(8, [3, 4, 1, 1, 6])); // 3
