function circular(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (fast === slow) {
      return true;
    }
  }

  return false;
}

module.exports = circular;
