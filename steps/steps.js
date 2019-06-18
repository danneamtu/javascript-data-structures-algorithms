function steps(n) {
  for (let row = 1; row <= n; row++) {
    let stair = '';

    for (let column = 1; column <= n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

module.exports = steps;

// FIRST SOLUTION
// function steps(n) {
//   let pounds = '';

//   const stepsArray = Array.from({ length: n }, (_, index) => {
//     pounds = '';

//     for (let i = 0; i < index + 1; i++) {
//       pounds += '#';
//     }

//     while (pounds.length < n) {
//       pounds += ' ';
//     }

//     return pounds;
//   });

//   stepsArray.forEach(step => {
//     console.log(step);
//   });
// }
