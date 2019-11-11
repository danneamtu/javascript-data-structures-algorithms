function substrCount(n, s) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    let odd = getPalindrom(s, i - 1, i + 1);
    let even = getPalindrom(s, i - 1, i);

    if (odd) {
      total += odd;
    }

    if (even) {
      total += even;
    }
  }

  return total + n;
}

function getPalindrom(string, leftIndex, rightIndex) {
  let counter = 0;
  while (leftIndex >= 0 && rightIndex < string.length) {
    if (counter < 1) {
      if (string[leftIndex] === string[rightIndex]) {
        counter += 1;
      } else if (string[leftIndex] !== string[rightIndex]) {
        break;
      }
      leftIndex -= 1;
      rightIndex += 1;
    } else if (counter > 0) {
      if (
        string[leftIndex] === string[rightIndex] &&
        string[rightIndex] == string[rightIndex - 1]
      ) {
        counter += 1;
      } else {
        break;
      }
      leftIndex -= 1;
      rightIndex += 1;
    }
  }
  return counter;
}

// time complexity - O(n^2), where n is the length of the input string
// space complexity - O(1), no other data structures where used
