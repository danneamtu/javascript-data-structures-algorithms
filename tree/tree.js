class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const temp = [this.root];
    while (temp.length > 0) {
      const node = temp.shift();
      temp.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const temp = [this.root];
    while (temp.length > 0) {
      const node = temp.shift();
      temp.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = {Tree, Node};
