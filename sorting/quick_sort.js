const quick_sort_helper = arr => {
  start = 0;

  pivot_value = arr[start];
  pivot_index = 0;

  for (let i = start + 1; i < arr.length; i += 1) {
    if (pivot_value > arr[i]) {
      pivot_index += 1;
      [arr[i], arr[pivot_index]] = [arr[pivot_index], arr[i]];
    }
  }

  [pivot_value, arr[pivot_index]] = [arr[pivot_index], pivot_value];

  console.log(arr);

  return pivot_index;
};

console.log(quick_sort_helper([5, 2, 7, -1, 20, 0, -5, 10]));
