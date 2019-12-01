// Time complexity of O(n) - Where n is the number of nodes in the Linked List.
// Space complexity of O(1) - Since there was no additional data structures used.

const detectCycleInLinkedList = (list) => {
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
};

module.exports = detectCycleInLinkedList;
