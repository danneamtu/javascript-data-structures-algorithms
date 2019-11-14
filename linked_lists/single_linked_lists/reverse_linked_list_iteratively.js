const reverseList = head => {
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
