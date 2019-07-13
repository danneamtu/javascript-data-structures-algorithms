function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;
  let count = 0;

  while (count < n) {
    fast = fast.next;
    count++;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
