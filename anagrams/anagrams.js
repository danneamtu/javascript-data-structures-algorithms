function anagrams(stringA, stringB) {
  const aMap = buildCharacterMap(stringA);
  const bMap = buildCharacterMap(stringB);

  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false;
  }

  for (let key in aMap) {
    if (aMap[key] !== bMap[key]) {
      return false;
    }
  }

  return true;
}

function buildCharacterMap(str) {
  const characterMap = {};

  for (let character of str.replace(/[^\w]/g, '').toLowerCase()) {
    characterMap[character] = ++characterMap[character] || 1;
  }

  return characterMap;
}

module.exports = anagrams;

// FIRST SOLUTION:
// function anagrams(stringA, stringB) {
//   let a = stringA.replace(/[^\w]/g, '').toLowerCase();
//   let b = stringB.replace(/[^\w]/g, '').toLowerCase();

//   if (a.length !== b.length) {
//     return false;
//   } else {
//     const aMap = a.split('').reduce((characterMap, character) => {
//       if (characterMap[character]) {
//         ++characterMap[character];
//       } else {
//         characterMap[character] = 1;
//       }
//       return characterMap;
//     }, {});

//     const bMap = b.split('').reduce((characterMap, character) => {
//       if (characterMap[character]) {
//         ++characterMap[character];
//       } else {
//         characterMap[character] = 1;
//       }
//       return characterMap;
//     }, {});

//     for (let key in aMap) {
//       if (aMap[key] !== bMap[key]) {
//         return false;
//       }
//     }

//     return true;
//   }
// }
