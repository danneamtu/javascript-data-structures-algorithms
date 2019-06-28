class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    this.data.pop();
  }

  peek() {
    this.data.slice(-1);
  }
}

module.exports = Queue;
