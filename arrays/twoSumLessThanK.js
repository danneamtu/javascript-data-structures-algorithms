// Time complexity O(n^2) - Where n is the length of the input array.
// Space complexity O(1) - Since there no additional data structures used.

const twoSumLessThanK = (A, K) => {
  let max = -1;

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let sum = A[i] + A[j];
      if (sum > max && sum < K) {
        max = sum;
      }
    }
  }

  return max;
};
