// Caesar Cipher Encryptor
// Given a non-empty string of lowercase letters
// and a non-negative integer value representing a key,
// write a function that returns a new string
// obtained by shifting every letter in the input string by kth positions in the alphabet,
// where k is the key.
// Note that letters should 'wrap' around the alphabet.
// the letter 'z' shifted by 1 returns the letter 'a'

const {caesarCipherEncryptor} = require('./caesarCipherEncryptor');

test('xyz should return zab', () => {
  expect(caesarCipherEncryptor('xyz', 2)).toEqual('zab');
});

test('abc should return cde', () => {
  expect(caesarCipherEncryptor('abc', 2)).toEqual('cde');
});
