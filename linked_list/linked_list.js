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
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // let last = this.head;

    // while (last.next) {
    //   last = last.next;
    // }

    // return last;

    // this solution removes one last iteration when the last node.next is null
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      // this solution removes one last iteration when the last node.next is null
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
}

module.exports = {Node, LinkedList};
