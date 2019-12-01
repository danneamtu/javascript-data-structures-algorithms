// Time complexity of O(n + m) - Where n and m are the lengths of the two input arrays.
// Space complexity of O(n) - Where n is the length of the intersection elements.

const findIntersection = (arr1, arr2) => {
  let set = new Set(arr1);
  let result = new Set();

  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      result.add(arr2[i]);
    }
  }

  return Array.from(result);
};

console.log(findIntersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(findIntersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9, 4]
