// Time complexity O(s) - Where s is the length of the stones I have available.
// Space complexity O(j) - Where J is the length of the jewels to find.

const numJewelsInStones = (J, S) => {
  const jewels = {};
  let result = 0;

  for (let j of J) {
    jewels[j] = 0;
  }

  for (let s of S) {
    if (s in jewels) {
      result += 1;
    }
  }

  return result;
};
