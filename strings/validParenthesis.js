// Time complexity - O(n) where n is the length of the input string
// Space complexity - O(n) where n is the length of the hash table we are creating.

const isValid = (s) => {
  const stack = [];
  const charMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (char in charMap) {
      let lastElement = stack.pop();

      if (lastElement !== charMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return !stack.length;
};
