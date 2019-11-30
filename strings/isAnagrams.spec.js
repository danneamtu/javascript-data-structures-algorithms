const {isAnagrams} = require('./isAnagrams');

test('rail safety is an anagram of fairy tales', () => {
  expect(isAnagrams('rail safety', 'fairy tales')).toBeTruthy();
});

test('hello is an anagram of llohe', () => {
  expect(isAnagrams('hello', 'llohe')).toBeTruthy();
});

test('Whoa! Hi! is an anagram of Hi! Whoa!', () => {
  expect(isAnagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('One One is not an anagram of Two two two', () => {
  expect(isAnagrams('One One', 'Two two two')).toBeFalsy();
});

test('One one is not an anagram of One one c', () => {
  expect(isAnagrams('One one', 'One one c')).toBeFalsy();
});

test('A tree, a life, a bench is not an anagram of A tree, a fence, a yard', () => {
  expect(
    isAnagrams('A tree, a life, a bench', 'A tree, a fence, a yard'),
  ).toBeFalsy();
});
