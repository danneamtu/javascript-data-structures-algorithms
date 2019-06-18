function steps(n) {
  let pounds = '';
  let spaces = '';

  const stepsArray = Array.from({ length: n }, (element, index) => {
    // if (index < n) {
    //   pounds += '#';
    //   return pounds;
    // }

    pounds = '';

    for (let i = 0; i < index + 1; i++) {
      pounds += '#';
    }

    while (pounds.length < n) {
      pounds += ' ';
    }
    
    return pounds;
  });

  stepsArray.forEach(step => {
    console.log(step);
  });
}

module.exports = steps;
