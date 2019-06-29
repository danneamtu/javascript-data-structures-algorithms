function fibonacci_70(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    let lastElement = arr[i - 1];
    let precedingElement = arr[i - 2];
    arr.push(lastElement + precedingElement);
  }

  return arr[n];
}

module.exports = fibonacci_70;
