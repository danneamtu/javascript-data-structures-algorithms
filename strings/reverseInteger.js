// Time complexity O(n) - Where n is the amount of input integers.
// Space complexity O(n) - Where n is the length of the integer string.

const reverse = (x) => {
  let num = x.toString();
  let result = '';

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] !== '-') {
      result += num[i];
    }
  }

  const integer = +result;

  if (integer > 2147483647) {
    return 0;
  } else if (x < 0) {
    return integer * -1;
  } else {
    return integer;
  }
};
