const twoSum = (nums, target) => {
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    sum += nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum == target) {
        results.push(i);
        results.push(j);
        break;
      } else {
        sum = nums[i];
      }
    }
  }
  return results;
};

console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]