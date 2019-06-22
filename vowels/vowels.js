function vowels(string) {
  return string.split('').reduce((count, character) => {
    if (
      character === 'a' ||
      character === 'e' ||
      character === 'i' ||
      character === 'o' ||
      character === 'u' ||
      character === 'A' ||
      character === 'E' ||
      character === 'I' ||
      character === 'O' ||
      character === 'U'
    ) {
      count += 1;
    }
    return count;
  }, 0);
}

module.exports = vowels;
