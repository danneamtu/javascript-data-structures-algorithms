// Time complexity of O(n) - Where n is the amount of nodes in the Binary Search Tree input.
// Space complexity of O(1) - Since we are not using an additional data structure.

const rangeSumBST = (root, L, R, sum = 0) => {
  if (root.val >= L && root.val <= R) {
    sum += root.val;
  }

  if (root.left) {
    sum += rangeSumBST(root.left, L, R);
  }

  if (root.right) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};
