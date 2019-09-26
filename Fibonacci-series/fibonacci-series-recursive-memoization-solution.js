// Memoization
// Store the result of each function call along with its belonging argument in an object.
// If the function is called again, with the same argument, return the precomputed result
// that its stored in the object rather than executing the function again.


// Solution 1
const memoize = slowFib => {
    const cache = {};
    // Initialize the object where all the results will be stored.
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        };
    const result = slowFib.apply(this,args);
    // The apply() method calls a function with a given 'this' value, and arguments provided as an array (or an array-like object).
    cache[args] = result;
    return result;
    };
};

const slowFib = n => {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);


// Solution 2
const memoize = fib => {
    const cache = {};
    // Initialize the object where all the results will be stored.
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        };
        const result = fib.apply(this, args);
        // The apply() method calls a function with a given 'this' value, and arguments provided as an array (or an array-like object).
        cache[args] = result;
        return result;
    };
};

let fib = n => {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

fib(50);