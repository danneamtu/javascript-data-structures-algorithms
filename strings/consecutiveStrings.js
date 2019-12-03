/*
You are given an array of strings called arr and an integer k. Your task is to return the longest string consisting of k consecutive strings from the array.

i.e. Which "k" consecutive strings in the array are the longest?

For example, if "k" is 2, and the array of strings is:
["zone", "abigail", "theta", "form", "libe", "zas"]

...then the longest two strings are "abigailtheta"

longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2) // <--- "abigailtheta" 

To build your algorithm, consider "n"  the length of the array of strings. 
If n = 0, or k > n, or k <= 0, then return "" (an empty string).
*/

// ["Harry", "Ron", "Hermione", "Minerva", "Albus", "Draco"], 4
const consecutiveStrings = (arr, k) => {
  let maxLength = 0;
  let resultString = '';

  for (let i = 0; i <= arr.length - k; i++) {
    let iterate = 0;
    let longestStringLength = 0;
    let longestString = '';
    while (iterate < k) {
      longestStringLength += arr[i + iterate].length;
      longestString += arr[i + iterate];
      iterate += 1;
    }

    if (longestStringLength > maxLength) {
      maxLength = longestStringLength;
      resultString = longestString;
    }
  }

  return resultString;
};

module.exports = consecutiveStrings;
