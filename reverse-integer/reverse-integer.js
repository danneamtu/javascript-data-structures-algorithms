function reverseInteger(n) {
  const multiplier = Math.sign(n);

  return (
    +n
      .toString()
      .split('')
      .reverse()
      .filter(num => num !== '-')
      .join('') * multiplier
  );
}

module.exports = reverseInteger;

// function reverseInteger(n) {
//   const multiplier = Math.sign(n);

//   if (multiplier > 0) {
//     return +n
//       .toString()
//       .split('')
//       .reverse()
//       .join('');
//   } else {
//     return (
//       +n
//         .toString()
//         .split('')
//         .filter(negativeSign => negativeSign !== '-')
//         .reverse()
//         .join('') * multiplier
//     );
//   }
// }
