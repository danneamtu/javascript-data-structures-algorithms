// Time complexity O(n) - Where n is the length of the array.
// Space complexity O(k) - Where k is the number of contigous subarray elements.

const findAverageOfSubarrays = (arr, K) => {
  const result = [];

  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      result.push(windowSum / K);

      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return result;
};

// [2.2, 2.8, 2.4, 3.6, 2.8]
console.log(findAverageOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
