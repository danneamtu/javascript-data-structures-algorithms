const smallestDifference = (arrayOne, arrayTwo) => {
  const result = [null, null]; // 10, 15
  let min = null; // -5
  for (let numberOne of arrayOne) {
    for (let numberTwo of arrayTwo) {
      let difference = numberOne - numberTwo;

      if (min === null) {
        min = difference;
        result[0] = numberOne;
        result[1] = numberTwo;
        continue;
      }

      if (difference > 0) {
        if (difference < min) {
          min = difference;
          result[0] = numberOne;
          result[1] = numberTwo;
        }
      } else if (difference < 0) {
        if (difference > min) {
          min = difference;
          result[0] = numberOne;
          result[1] = numberTwo;
        }
      } else if (difference === 0) {
        result[0] = numberOne;
        result[1] = numberTwo;
        return result;
      }
    }
  }
  return result;
};
