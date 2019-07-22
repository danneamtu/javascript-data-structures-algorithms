function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      };
    };
  };

  return arr;
};

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      };
    };

    if (indexOfMin !== i) {
      [arr[indexOfMin], arr[i]] = [arr[i], arr[indexOfMin]];
    };
  };

  return arr;
};

module.exports = { bubbleSort, selectionSort };