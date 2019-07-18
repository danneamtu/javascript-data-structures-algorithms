class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];
}

module.exports = {Node, levelWidth};
