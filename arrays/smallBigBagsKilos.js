const calculateSmallBags = (small, big, goal) => {
  const smallWeight = 1;
  const bigWeight = 5;

  const bigBagAmount = big * bigWeight;
  const smallBagAmount = small * smallWeight;

  const leftForSmallBags = goal - bigBagAmount;

  if (small <= 0 || leftForSmallBags <= 0) {
    return -1;
  } else if (leftForSmallBags > small) {
    return small;
  } else {
    return leftForSmallBags;
  }
};

console.log(calculateSmallBags(0, 1, 9));
console.log(calculateSmallBags(4, 1, 9));
console.log(calculateSmallBags(5, 3, 100));
console.log(calculateSmallBags(0, 3, 1));
console.log(calculateSmallBags(1, 3, 1));
