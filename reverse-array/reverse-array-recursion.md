## Reverse Array using recursion.

```js
const reverseArray = function(a, char = 0, reversedArray = []) {
  if (char < a.length) {
    return reverseArray(a, char + 1, [a[char], ...reversedArray]);
  }
  return reversedArray
};

reverseString(['h', 'e', 'l', 'l', 'o']) // [ 'o', 'l', 'l', 'e', 'h' ] 
```

```js
var reverseString = function(a) {
  return a.length < 2 ? a : [a.pop()].concat(reverseString(a));
};

reverseString(['h', 'e', 'l', 'l', 'o']) // [ 'o', 'l', 'l', 'e', 'h' ] 
```