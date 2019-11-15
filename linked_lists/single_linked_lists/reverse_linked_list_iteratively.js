class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const ll = new Node(1, new Node(2, new Node(3)));

// time complexity - O(n), where n is the length of the linked list
// space complexity - O(1), we are not using a data structure or a call stack
const reverse_list = head => {
  if (!head) {
    return head;
  }

  let begin = head;
  let rest = head.next;

  begin.next = null;

  while (rest) {
    let temp = rest.next;
    rest.next = begin;
    begin = rest;
    rest = temp;
  }

  return begin;
};

// time complexity - O(n), where n is the length of the linked list
// space complexity - O(n), where n is the length of the linked list in the recursive call stack 
const reverse_list_recursively = (head, new_head = null) => {
  if (!head) {
    return new_head;
  }

  let rest = head.next;
  head.next = new_head;
  return reverse_list_recursively(rest, head);
};

console.log(reverse_list_recursively(ll));
