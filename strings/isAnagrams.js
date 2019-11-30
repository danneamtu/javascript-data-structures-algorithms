function isAnagrams(stringA, stringB) {
  const charSeen = new Set();

  for (let char of stringA) {
    charSeen.add(char);
  }

  for (let char of stringB) {
    if (!charSeen.has(char)) {
      return false;
    }
  }

  return true;
}

module.exports = {isAnagrams};
