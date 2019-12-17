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
