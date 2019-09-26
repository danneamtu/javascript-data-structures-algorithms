function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;
  let count = 0;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
