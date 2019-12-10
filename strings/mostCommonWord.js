const mostCommonWord = (paragraph, banned) => {
  const bannedWords = new Set(banned);
  const wordCount = {};
  const pLowerCased = paragraph.toLowerCase();

  let maxCount = 0;
  let result = '';

  let i = 0;
  let currentWord = '';

  while (i < pLowerCased.length) {
    if (pLowerCased.charCodeAt(i) >= 97 && pLowerCased.charCodeAt(i) <= 122) {
      currentWord += pLowerCased[i];

      if (currentWord.length > 0 && i === pLowerCased.length - 1) {
        if (currentWord in wordCount) {
          wordCount[currentWord] += 1;

          if (
            wordCount[currentWord] > maxCount &&
            !bannedWords.has(currentWord)
          ) {
            result = currentWord;
            maxCount = wordCount[currentWord];
          }
        } else {
          wordCount[currentWord] = 1;

          if (
            wordCount[currentWord] > maxCount &&
            !bannedWords.has(currentWord)
          ) {
            result = currentWord;
            maxCount = wordCount[currentWord];
          }
        }
      }

      i += 1;
    } else {
      if (currentWord.length > 0) {
        if (currentWord in wordCount) {
          wordCount[currentWord] += 1;

          if (
            wordCount[currentWord] > maxCount &&
            !bannedWords.has(currentWord)
          ) {
            result = currentWord;
            maxCount = wordCount[currentWord];
          }

          currentWord = '';
          i += 1;
        } else {
          wordCount[currentWord] = 1;

          if (
            wordCount[currentWord] > maxCount &&
            !bannedWords.has(currentWord)
          ) {
            result = currentWord;
            maxCount = wordCount[currentWord];
          }

          currentWord = '';
          i += 1;
        }
      } else {
        i += 1;
      }
    }
  }

  return result;
};
