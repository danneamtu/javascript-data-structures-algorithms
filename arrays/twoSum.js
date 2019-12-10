// Time complexity O(n) - Where n is the length of the input nums array.
// Space complexity O(n) - Where n is the length of the visited elements in nums array.
// Worst case scenario is if we store all numbers of the input array.

const twoSum = (nums, target) => {
  const hashTable = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (diff in hashTable) {
      return [hashTable[diff], i];
    } else {
      hashTable[nums[i]] = i;
    }
  }
};
