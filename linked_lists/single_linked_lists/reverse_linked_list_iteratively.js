class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const ll = new Node(1, new Node(2, new Node(3)));

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

const reverse_list_recursively = (head, new_head = null) => {
  if (!head) {
    return new_head;
  }

  let node = head.next;
  head.next = new_head;
  return reverse_list_recursively(node, head);
};

console.log(reverse_list_recursively(ll));
