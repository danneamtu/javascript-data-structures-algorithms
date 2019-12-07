// Time complexity O(n) - Where n is the length of the input string.
// Space complexity O(r) - Where r is the length of the roman numerals available.
const romanToInt = (str) => {
  let result = 0;

  const romanTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < str.length; i++) {
    result += romanTable[str[i]];

    if (i > 0 && romanTable[str[i - 1]] < romanTable[str[i]]) {
      let subtraction = romanTable[str[i]] - romanTable[str[i - 1]];
      result -= romanTable[str[i]];
      result -= romanTable[str[i - 1]];
      result += subtraction;
    }
  }

  return result;
};
