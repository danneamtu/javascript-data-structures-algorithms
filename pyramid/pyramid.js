function pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);
  
  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

module.exports = pyramid;
