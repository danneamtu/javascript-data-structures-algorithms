function reverseInteger(n) {
  if (Math.sign(n) > 0) {
    return +n
      .toString()
      .split('')
      .reverse()
      .join('');
  } else {
    return (
      +n
        .toString()
        .split('')
        .filter(negativeSign => negativeSign !== '-')
        .reverse()
        .join('') * Math.sign(n)
    );
  }
}

module.exports = reverseInteger;
