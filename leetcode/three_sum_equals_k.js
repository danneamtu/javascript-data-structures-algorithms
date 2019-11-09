const threeSum = (nums, target) => {
  const results = [];

  nums.sort((a, b) => a - b);

  for (let left = 0; left < nums.length - 2; left++) {
    if (nums[left] > target) break;
    if (left > 0 && nums[left] == nums[left - 1]) continue;

    let mid = left + 1;
    let right = nums.length - 1;

    while (mid < right) {
      let sum = nums[left] + nums[mid] + nums[right];

      if (sum == target) {
        results.push([nums[left], nums[mid], nums[right]]);

        while (nums[mid] == nums[mid + 1]) mid++;
        while (nums[right] == nums[right - 1]) right--;

        mid++;
        right--;
      } else if (sum < target) {
        mid++;
      } else {
        right--;
      }
    }
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));
