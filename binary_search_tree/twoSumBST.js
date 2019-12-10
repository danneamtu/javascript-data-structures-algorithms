// Time complexity of O(n) - Where n is the number of nodes in the Binary Search Tree.
// Space complexity of O(1) - Since there are no aditional data structures used.

const findTarget = (root, k) => {
  const visited = new Set();
  const stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    let diff = k - node.val;
    if (visited.has(diff)) {
      return true;
    } else {
      visited.add(node.val);
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return false;
};
