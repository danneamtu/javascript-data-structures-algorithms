const middleNode = head => {
  if (!head) {
    return head;
  }

  let fast = head;
  let slow = head;

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return fast.next === null ? slow : slow.next;
};
