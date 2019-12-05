// Time complexity of O(n) - Where n is the number of nodes in the tree.
// Space complexity of O(n) - Where n is the length of nodes in the nodes array.
// but O(d), where d is the amount of depths, maximum of 2, in an array and set.

const isBalanced = (treeNode) => {
  const depths = new Set();
  const depthsCalculate = [];

  const nodes = [[treeRoot, 0]];

  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      if (!depths.has(depth)) {
        depths.add(depth);
        depthsCalculate.push(depth);

        if (
          depths.size > 2 ||
          (depths.size === 2 &&
            Math.abs(depthsCalculate[0] - depthsCalculate[1]) > 1)
        ) {
          return false;
        }
      }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }

      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
};
