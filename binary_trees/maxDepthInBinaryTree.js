// Time complexity of O(n) - Where n is the number of nodes in the Tree.
// Space complexity of O(n) - Where a Queue was used.

const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  const queue = [root];

  let depth = 0;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    depth += 1;
  }

  return depth;
};
