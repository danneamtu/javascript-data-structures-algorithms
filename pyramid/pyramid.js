function pyramid(numberOfSteps, row = 0, level = '') {
  const midpoint = Math.floor((numberOfSteps * 2 - 1) / 2);

  if (numberOfSteps === row) {
    return;
  }

  if (level.length === numberOfSteps * 2 - 1) {
    console.log(level);
    return pyramid(numberOfSteps, row + 1);
  }

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += '#';
  } else {
    level += ' ';
  }

  pyramid(numberOfSteps, row, level);
}

module.exports = pyramid;

// FIRST SOLUTION
// function pyramid(n) {
//   const midpoint = Math.floor((n * 2 - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let column = 0; column < n * 2 - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }
