// ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
function reverseWords(arr) {
  let left = 0;
  let right = arr.length - 1;

  reverseHelper(left, right, arr);

  left = 0; //
  right = 0; //

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      reverseHelper(left, i - 1, arr);
      left = i + 1;
      right = i + 1;
    } else {
      right += 1;
    }
  }

  return arr;
}

function reverseHelper(left, right, arr) {
  while (left !== right && left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left += 1;
    right -= 1;
  }
}


// time complexity of O(n ^ w) where n is the length of the array and w is the number of words in the array seperated by space
// space complexity of O(1) since we are not using any additional data structures