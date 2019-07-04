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
    let currentHeadNode = new Node(this.head);
    let newHeadNode = new Node(record, currentHeadNode);
    this.head = newHeadNode;
  }
}

module.exports = {Node, LinkedList};
