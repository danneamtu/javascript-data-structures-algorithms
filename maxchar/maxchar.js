// character map
function maxChar(str) {
  let max = 0;
  let maxCharacter = '';

  const characterMap = str.split('').reduce((obj, char) => {
    if (obj[char]) {
      ++obj[char];
    } else {
      obj[char] = 1;
    }
    return obj;
  }, {});

  for (let character in characterMap) {
    if (characterMap[character] > max) {
      max = characterMap[character];
      maxCharacter = character;
    }
  }
  return maxCharacter;
}

module.exports = maxChar;

// if (obj[char] > max) {
//   max = obj[char];
//   maxCharacter = char;
// }
