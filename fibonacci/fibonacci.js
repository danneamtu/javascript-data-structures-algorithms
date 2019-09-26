function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);

    cache[args] = result;

    return result;
  };
}

function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci = memoize(fibonacci);

module.exports = fibonacci;

// ITERATIVE SOLUTION - LINEAR RUNTIME COMPLEXITY
// function fibonacci(n) {
//   let result = [0, 1];

//   for (let index = 2; index <= n; index++) {
//     let preceding = result[index - 2];
//     let last = result[index - 1];
//     result.push(preceding + last);
//   }

//   return result[result.length - 1]
// }

// RECURSIVE SOLUTION - EXPONENTIAL RUNTIME COMPLEXITY
// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
