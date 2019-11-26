function mergeTwoSortedArrays(arrOne, arrTwo) {
  const mergedArray = [];

  let arrOneIdx = 0; // 3
  let arrTwoIdx = 0; // 0
  let mergedIdx = 0; // 3

  while (mergedIdx < (arrOne.length + arrTwo.length)) {
    const isArrOneExhausted = arrOneIdx > arrOne.length - 1;
    const isArrTwoExhausted = arrTwoIdx > arrTwo.length - 1;


    if (!isArrOneExhausted && (isArrTwoExhausted || arrOne[arrOneIdx] < arrTwo[arrTwoIdx])) {
      mergedArray[mergedIdx] = arrOne[arrOneIdx];
      arrOneIdx += 1;
    } else {
      mergedArray[mergedIdx] = arrTwo[arrTwoIdx];
      arrTwoIdx += 1;
    }

    mergedIdx += 1;
  }
  // [-1, -3, -9]
  return mergedArray;
}

console.log(mergeTwoSortedArrays([1, 3, 9], [2, 5, 6])); // [1, 2, 3, 5, 6, 9]
console.log(mergeTwoSortedArrays([-1, -3, -9], [2, 5, 6])); // [-1, -3, -9, 2, 5, 6]

// time complexity of O(n + m) where n and m is the length of the two input arrays
// space complexity of O(n + m) where n + m is the length of the two merged arrays