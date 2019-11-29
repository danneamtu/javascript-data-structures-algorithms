const {caesarCipherEncryptor} = require('./caesarCyperEncryptor');

test('xyz should return zab', () => {
  expect(caesarCipherEncryptor('xyz', 2)).toEqual('zab');
});
