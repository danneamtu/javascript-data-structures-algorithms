const intersection_first_solution = (nums1, nums2) => {
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

const intersection = (arr1, arr2) => {
  let set = new Set(arr1);
  let result = new Set();

  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      result.add(arr2[i]);
    }
  }

  return Array.from(result);
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
