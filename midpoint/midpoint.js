function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
