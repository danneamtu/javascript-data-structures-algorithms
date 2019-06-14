// character map
function maxChar(str) {
  let max = 0;
  let maxCharacter = '';

  str.split('').reduce((obj, char) => {
    if (obj[char]) {
      ++obj[char];
    } else {
      obj[char] = 1;
    }

    if (obj[char] > max) {
      max = obj[char];
      maxCharacter = char;
    }

    return obj;
  }, {});

  return maxCharacter;
}

module.exports = maxChar;
