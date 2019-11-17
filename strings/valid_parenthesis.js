const isValid = s => {
  const stack = [];
  const char_map = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (let str of s) {
    if (str in char_map) {
      let last_element = stack.pop();

      if (last_element !== char_map[str]) {
        return false;
      }
    } else {
      stack.push(str);
    }
  }

  return !stack.length;
};


// time complexity - O(n) where n is the length of the input string
// space complexity - O(n) where n is the length of the hash table we are creating.