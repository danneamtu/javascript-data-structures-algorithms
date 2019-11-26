function mergeLinkedLists(headOne, headTwo) {
  let prev = null;
  let p1 = headOne;
  let p2 = headTwo;

  // 3 -> 9 -> 12
  // 1 -> 4 -> 6

  while (p1 && p2) {
    if (p1.value < p2.value) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev) {
        prev.next = p2;
      }
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }

  if (!p1) {
    prev.next = p2;
  }

  return headOne.value < headTwo.value ? headOne : headTwo;
}

// time complexity of O(n + m) where n and m are the lengths of the linked lists
// space complexity of O(1), since no additional data structures were used
