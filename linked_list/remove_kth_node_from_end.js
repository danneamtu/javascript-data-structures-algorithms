/*
 * Complete the 'removeKthLinkedListNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST head
 *  2. INTEGER k
 */

function removeKthLinkedListNode(head, k) {
  let length_of_linked_list = 0;

  let current_node = head;

  while (current_node) {
    length_of_linked_list += 1;
    current_node = current_node.next;
  }

  let node_to_remove = length_of_linked_list - k;

  if (node_to_remove < 0) {
    return head;
  } else if (node_to_remove === 0) {
    let temp = head.next;
    head = temp;
    return head;
  }

  let counter = 0;
  current_node = head;
  let prev_node = null;

  while (counter !== node_to_remove) {
    counter += 1;
    prev_node = current_node;
    current_node = current_node.next;
  }

  prev_node.next = prev_node.next.next;

  return head;
}
