function palindrome(str) {
  return str.split('').every((character, index) => character === str[str.length - index - 1])
}

module.exports = palindrome;

// function palindrome(str) {
//   return str === str.split('').reduce((reversed, character) => character + reversed,'')
// }

// function palindrome(str) {
//   return str.split('').reverse().every((element, index) => element === str[index])
// }