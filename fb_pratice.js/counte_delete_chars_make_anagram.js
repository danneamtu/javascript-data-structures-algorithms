function makeAnagram(a, b) {
  // hash_table = {
  //     "c": 2,
  //     "e": 1,
  //     "d": 1
  // }

  // hash_table2 = {
  //     "c": 1,
  //     "a": 1,
  //     "b": 1
  // }

  // "cced"
  // "abc"

  let counter = 0;
  const hashA = {};
  const hashB = {};

  for (let character of a) {
    if (!(character in hashA)) {
      hashA[character] = 1;
    } else {
      hashA[character] += 1;
    }
  }

  for (let character of b) {
    if (!(character in hashB)) {
      hashB[character] = 1;
    } else {
      hashB[character] += 1;
    }
  }

  for (let key in hashA) {
    if (!(key in hashB)) {
      counter += hashA[key];
    }
  }

  for (let key in hashB) {
    if (!(key in hashA)) {
      counter += hashB[key];
    } else {
      if (hashA[key] > hashB[key]) {
        let difference = hashA[key] - hashB[key];
        counter += difference;
      } else if (hashB[key] > hashA[key]) {
        let difference = hashB[key] - hashA[key];
        counter += difference;
      }
    }
  }

  return counter;
}

// time complexity - O(4n), O(n), O(a + b), where a and b are the length of each string
// space complexity - O(n), O(a + b), where the hashtable is the length of string a and b
