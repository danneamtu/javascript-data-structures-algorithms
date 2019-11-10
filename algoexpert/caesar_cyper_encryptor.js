function caesarCipherEncryptor(string, key) {
  let new_string = "";
  for (let i = 0; i < string.length; i++) {
    new_string += getNewLetter(string[i], key % 26);
  }
  return new_string;
}

function getNewLetter(letter, key) {
  let newLetterCode = letter.charCodeAt() + key;

  if (newLetterCode <= 122) {
    return String.fromCharCode(newLetterCode);
  } else {
    return String.fromCharCode((newLetterCode % 122) + 96);
  }
}

// time complexity O(n), where n is the length of the string input
// space complexity O(n), where n is the new_string string

