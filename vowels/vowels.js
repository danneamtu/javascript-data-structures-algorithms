function vowels(string) {
  
}

module.exports = vowels;
// first solution
// function vowels(string) {
//   return string.split('').reduce((count, character) => {
//     if (
//       character === 'a' ||
//       character === 'e' ||
//       character === 'i' ||
//       character === 'o' ||
//       character === 'u' ||
//       character === 'A' ||
//       character === 'E' ||
//       character === 'I' ||
//       character === 'O' ||
//       character === 'U'
//     ) {
//       count += 1;
//     }
//     return count;
//   }, 0);
// }

// second solution
// function vowels(string) {
//   let count = 0;
//   const vowelChecker = ['a', 'e', 'i', 'o', 'u'];

//   for (let character of string.toLowerCase()) {
//     if (vowelChecker.includes(character)) {
//       count++;
//     }
//   }

//   return count;
// }
