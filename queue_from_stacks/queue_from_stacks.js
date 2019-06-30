// Implement a Queue data structure using 2 stacks.

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

class Queue {
  constructor() {
    this.stack = new Stack();
  }

  add(record) {
    this.stack.data.push(record);
  }

  remove() {
    return this.stack.data.shift();
  }

  peek() {
    return this.stack.data[0];
  }
}

module.exports = Queue;
