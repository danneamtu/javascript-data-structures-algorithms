function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  let t = 0;
  let d = 0;
  let maxT = takeOutOrders.length - 1;
  let maxD = dineInOrders.length - 1;

  // Take Out Orders: [1, 3, 5]
  // Dine In Orders: [2, 4, 6, 8]
  // Served Orders: [1, 2, 3, 5, 4, 6]

  for (let i = 0; i < servedOrders.length; i++) {
    const order = serverdOrders[i];

    if (t <= maxT && order === takeOutOrders[t]) {
      t += 1;
    } else if (d <= maxD && order === dineInOrders[d]) {
      d += 1;
    } else {
      return false;
    }
  }

  if (t !== takeOurOrders.length || d !== dineInOrders.length) {
    return false;
  }

  return true;
}

// time complexity of O(s), where s is the length of serverdOrders.
// space complexity of O(1), since there was not an additional data structure used.
