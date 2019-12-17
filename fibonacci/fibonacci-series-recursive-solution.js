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
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

fib(5);
// For every additional increased number in the n parameter, the processing
// power of the solution doubles. O(2^n)
// Exponential Runtime Complexity.