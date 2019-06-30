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
    this.aStack = new Stack();
    this.bStack = new Stack();
  }

  add(record) {
    this.aStack.push(record);
  }

  remove() {
    while (this.aStack.peek() !== undefined) {
      this.bStack.push(this.aStack.pop());
    }

    const removedRecord = this.bStack.pop();

    while (this.bStack.peek() !== undefined) {
      this.aStack.push(this.bStack.pop());
    }

    return removedRecord;
  }
}

module.exports = Queue;
