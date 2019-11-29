function permutationsIsPalindrome(theString) {
  const unpairedChecks = new Set();

  for (let char of theString) {
    if (unpairedChecks.has(char)) {
      unpairedChecks.delete(char);
    } else {
      unpairedChecks.add(char);
    }
  }

  return unpairedChecks.size <= 1;
}

console.log(permutationsIsPalindrome('civic'));
