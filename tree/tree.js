class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }
}

class Tree {}

module.exports = {Tree, Node};
