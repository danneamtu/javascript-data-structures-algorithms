function anagrams(stringA, stringB) {
  let a = stringA.replace(/[^\w]/g, '').toLowerCase();
  let b = stringB.replace(/[^\w]/g, '').toLowerCase();

  if (a.length !== b.length) {
    return false;
  } else {
    const aMap = a.split('').reduce((characterMap, character) => {
      if (characterMap[character]) {
        ++characterMap[character];
      } else {
        characterMap[character] = 1;
      }
      return characterMap;
    }, {});

    const bMap = b.split('').reduce((characterMap, character) => {
      if (characterMap[character]) {
        ++characterMap[character];
      } else {
        characterMap[character] = 1;
      }
      return characterMap;
    }, {});

    for (let key in aMap) {
      if (aMap[key] !== bMap[key]) {
        return false;
      }
    }

    return true;
  }
}

module.exports = anagrams;
