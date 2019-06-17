function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

module.exports = capitalize;

// FIRST SOLUTION
// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(word => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(' ');
// }
