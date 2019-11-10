function alternatingCharacters(s) {
  let totalDeletions = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i] === s[i - 1]) continue;
    let counter = 1;
    let deletions = 0;
    while (s[i] === s[i + counter] && counter < s.length) {
      deletions += 1;
      counter += 1;
    }
    totalDeletions += deletions;
  }
  return totalDeletions;
}


// time complexity - O(n) where n is the length of the string
// space complexity - O(1) because we are not creating a new data structure