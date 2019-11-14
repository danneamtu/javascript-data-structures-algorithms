const quick_sort_helper = (arr, start = 0, end = arr.length - 1) => {
  pivot_value = arr[start];
  pivot_index = start;

  for (let i = start + 1; i <= end; i += 1) {
    if (pivot_value > arr[i]) {
      pivot_index += 1;
      [arr[i], arr[pivot_index]] = [arr[pivot_index], arr[i]];
    }
  }

  [arr[start], arr[pivot_index]] = [arr[pivot_index], arr[start]];

  return pivot_index;
};

const quick_sort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivot_index = quick_sort_helper(arr, left, right);

    quick_sort(arr, left, pivot_index - 1);
    quick_sort(arr, pivot_index + 1, right);
  }

  return arr;
};

console.log(quick_sort([-10, 100, 2, 7, -1, 20, 0, -5, 10]));
