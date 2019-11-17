const maxDepth = root => {
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


// time complexity of O(n), where n is the number of nodes in the tree;
// space complexity of O(n), where a Queue was used.