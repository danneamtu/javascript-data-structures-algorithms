function palindrome(str) {
  return str === str.split('').reduce((reversed, character) => character + reversed,'')
}

module.exports = palindrome;
