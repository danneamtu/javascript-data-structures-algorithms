function isValid(str) {
  const frequency = {};

  for (let character of str) {
    if (!(character in frequency)) {
      frequency[character] = 1;
    } else {
      frequency[character] += 1;
    }
  }

  let counter = 0;
  let checker = frequency[str[0]];

  for (let key in frequency) {
    if (frequency[key] > checker || frequency[key] < checker) {
      counter += 1;
    }
  }

  return counter > 1 ? "NO" : "YES";
}

// time complexity - O(n), where n is the length of str
// space complexity - O(n), because of the hash table
