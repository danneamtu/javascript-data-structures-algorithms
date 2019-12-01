// Time complexity of O(n) - Where n is the length of the input array.
// Space complexity of O(n) - Where n is the length of the result array.

const arrayToSubArrays = (array, size) => {
  const result = [[]];

  for (let element of array) {
    const popped = result[result.length - 1];

    if (popped.length === size) {
      result.push([element]);
    } else {
      popped.push(element);
    }
  }

  return result;
};

module.exports = {arrayToSubArrays};
