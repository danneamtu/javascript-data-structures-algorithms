const subarraySum = (nums, k) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum == k) {
        total += 1;
      }
    }
  }

  return total;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
