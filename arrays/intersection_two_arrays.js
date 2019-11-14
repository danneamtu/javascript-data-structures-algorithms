const intersection = (nums1, nums2) => {
  const table = {};
  const result_table = {};
  const result = [];

  for (let num of nums1) {
    if (table[num]) {
      table[num] += 1;
    } else {
      table[num] = 1;
    }
  }

  for (let num of nums2) {
    if (table[num]) {
      result_table[num] = true;
    }
  }

  for (let num in result_table) {
    result.push(+num);
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
