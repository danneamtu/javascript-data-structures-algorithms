const palindrome = require('./palindrome');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('"aggag" is NOT a palindrome', () => {
  expect(palindrome('aggag')).toBeFalsy();
});
