// QUEUE DATA STRUCTURE
// add remove
// adding should store element until it is removed

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
