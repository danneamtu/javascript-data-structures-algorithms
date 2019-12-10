const mostCommonWord = (paragraph, banned) => {
  let max = 0;
  let result = '';

  const bannedMap = new Set(banned);
  const wordCount = {};

  let str = paragraph.toLowerCase();
  let i = 0;
  let word = '';

  while (i < str.length) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      word += str[i];
      if (word.length > 0 && i === str.length - 1) {
        if (word in wordCount) {
          wordCount[word] += 1;

          if (wordCount[word] > max && !bannedMap.has(word)) {
            result = word;
            max = wordCount[word];
          }

          word = '';
          i += 1;
        } else {
          wordCount[word] = 1;
          if (wordCount[word] > max && !bannedMap.has(word)) {
            result = word;
            max = wordCount[word];
          }

          word = '';
          i += 1;
        }
      }
      i += 1;
    } else {
      if (word.length > 0) {
        if (word in wordCount) {
          wordCount[word] += 1;

          if (wordCount[word] > max && !bannedMap.has(word)) {
            result = word;
            max = wordCount[word];
          }

          word = '';
          i += 1;
        } else {
          wordCount[word] = 1;
          if (wordCount[word] > max && !bannedMap.has(word)) {
            result = word;
            max = wordCount[word];
          }

          word = '';
          i += 1;
        }
      } else {
        i += 1;
      }
    }
  }

  return result;
};
