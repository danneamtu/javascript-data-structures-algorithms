function steps(numberOfSteps, step = 0, string = '') {
  if (numberOfSteps === step) {
    return;
  }

  if (numberOfSteps === string.length) {
    console.log(string);
    return steps(numberOfSteps, step + 1);
  }

  if (string.length <= step) {
    string += '#';
  } else {
    string += ' ';
  }

  steps(numberOfSteps, step, string);
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

// SECOND SOLUTION
// {
// for (let row = 1; row <= n; row++) {
//   let stair = '';

//   for (let column = 1; column <= n; column++) {
//     if (column <= row) {
//       stair += '#';
//     } else {
//       stair += ' ';
//     }
//   }

//   console.log(stair);
// }

// FIRST RECURSIVE SOLUTION
// function steps(n, step = 0) {
//   if (step === n) {
//     return;
//   }

//   let stair = '';

//   for (let i = 0; i <= step; i++) {
//     stair += '#';
//   }

//   while (stair.length < n) {
//     stair += ' ';
//   }

//   console.log(stair);

//   steps(n, step + 1);
// }
