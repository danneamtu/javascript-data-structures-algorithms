function fibonacci(n) {
  let result = [0, 1];

  for (let index = 2; index <= n; index++) {
    let preceding = result[index - 2];
    let last = result[index - 1];
    result.push(preceding + last);
  }

  return result[result.length - 1]
}

module.exports = fibonacci;
