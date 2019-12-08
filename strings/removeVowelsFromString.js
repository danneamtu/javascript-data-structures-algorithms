const removeVowels = (str) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = '';

  for (let character of str) {
    if (!vowels.has(character)) {
      result += character;
    }
  }

  return result;
};
