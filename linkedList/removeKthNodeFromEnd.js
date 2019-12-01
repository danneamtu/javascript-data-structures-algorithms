// Time complexity of O(n) - Where n is the number of nodes in the Linked List.
// Space complexity of O(1) - Since there are no additional data structures.

const removeKthLinkedListNode = (head, k) => {
  counter = 1;
  first = head;
  second = head;

  while (counter <= k) {
    second = second.next;
    counter += 1;
  }

  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }

  first = first.next.next;
};
