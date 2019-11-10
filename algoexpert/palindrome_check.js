function isPalindrome(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - (i + 1)]) {
      return false;
    }
  }

  return true;
}

// O(n) time complexity - where n is the length of the string
// O(1) space complexity since we did not user anoter data structure.
