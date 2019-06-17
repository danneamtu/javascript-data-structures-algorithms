function capitalize(str) {
  return str
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}

module.exports = capitalize;
