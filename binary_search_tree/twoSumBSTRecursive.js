// Time complexity O(n) - Where n is the amount of nodes in the Binary Search Tree.
// Space complexity O(n) - Since a recursive call stack is being used.

const findTarget = (root, k, map = new Set()) => {
  if (root === null) {
    return false;
  }

  if (map.has(k - root.val)) {
    return true;
  }

  map.add(root.val);

  return findTarget(root.left, k, map) || findTarget(root.right, k, map);
};
