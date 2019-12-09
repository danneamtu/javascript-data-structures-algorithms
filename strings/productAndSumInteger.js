// Time complexity O(n) - Where n is the length of the iterable string.
// Space complexity O(n) - Where n is the length of the input string.

const subtractProductAndSum = (n) => {
  let iterable = n.toString();
  let product = 1;
  let sum = 0;

  for (let num of iterable) {
    sum += +num;
    product *= +num;
  }

  return product - sum;
};
