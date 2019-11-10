const countingValleys = (n, s) => {
  let level = 0;
  let valleys = 0;

  for (let direction of s) {
    if (direction == "U") {
      level += 1;
    } else {
      if (level == 0) {
        valleys += 1;
      }
      level -= 1;
    }
  }

  return valleys;
};

// time complexity of O(n), where n is the length of the string input
// space complexity of O(1), where we are not creating any new data structure