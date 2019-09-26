
// Print the nth entry in the fibonacci series.
// The fibonacci series is an ordering of numbers
// where each number is the sum of the preceeding two.
// For example, the sequence:
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// is the array of the first ten entries of the fibonacci series.

// Example:
fib(8); // 21
fib(4); // 3

const fib = n => {
    
  let result = [0,1];
  // the first two numbers are always going to be [0, 1]

  for ( let i = 2; i <= n; i++) {
    let preceeding1 = result[i-1];
    let preceeding2 = result[i-2];
    result.push(preceeding1+preceeding2);
  }
  return result[n];
}

fib(n);
// For every increase in n we have to calculate an additional number. O(n)
// Linear Runtime Complexity.