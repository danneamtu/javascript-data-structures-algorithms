function fibonacci_70(n, memoize = {1: 0, 2: 1}) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = fibonacci_70(n - 1, memoize) + fibonacci_70(n - 2, memoize);
    return memoize[n];
  }
}

module.exports = fibonacci_70;

// function fibonacci_70(n) {
//   let arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     let lastElement = arr[i - 1];
//     let precedingElement = arr[i - 2];
//     arr.push(lastElement + precedingElement);
//   }

//   return arr[n];
// }
