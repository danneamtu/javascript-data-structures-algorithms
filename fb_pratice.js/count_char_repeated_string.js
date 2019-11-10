function repeatedString(s, n) {
  // a, b, a
  // a, b, a, a, b, a, a, b, a, a
  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "a") {
      counter += 1;
    }
  }

  let repetitions = Math.floor(n / s.length);
  counter = counter * repetitions;

  let remainding = n % s.length;

  for (let j = 0; j < remainding; j++) {
    if (s[j] == "a") {
      counter += 1;
    }
  }

  return counter;
}
