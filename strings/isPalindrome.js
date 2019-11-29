// time complexity of O(n) - Where n is the length of the string.
// space complexity of O(1) - Since we did not use an additional structure.

function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
  }

  return true;
}
