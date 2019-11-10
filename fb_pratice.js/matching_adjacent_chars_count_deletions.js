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
