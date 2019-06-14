function maxChar(str) {
  return str.split('').reduce((obj, char) => {
    obj[char] = obj[char] ? ++obj[char] : 1;
    return obj;
  }, {});
}

module.exports = maxChar;
