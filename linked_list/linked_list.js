class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(record) {
    this.head = new Node(record, this.head);
  }

  size() {
    let node = this.head;

    if (node === null) {
      return 0;
    }

    let count = this.head ? 1 : 0;
    while (node.next !== null) {
      count++;
      node = node.next;
    }

    return count;
  }
}

module.exports = {Node, LinkedList};
