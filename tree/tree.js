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
    const temp = [];
    temp.push(this.root);
    while (temp.length > 0) {
      fn(temp[0]);
      temp.push(...temp[0].children);
      temp.shift();
    }
  }
}

module.exports = {Tree, Node};
