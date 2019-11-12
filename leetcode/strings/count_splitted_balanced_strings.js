const balancedStringSplit = s => {
  let total = 0;

  const hash_table = {
    R: 0,
    L: 0
  };

  for (let character of s) {
    hash_table[character] += 1;
    if (hash_table["R"] === hash_table["L"]) {
      total += 1;
      hash_table["R"] = 0;
      hash_table["L"] = 0;
    }
  }

  return total;
};

// time complexity - O(n), where n is the length of the string
// space complexity - O(1), the has table does not increase because of the length of the string.