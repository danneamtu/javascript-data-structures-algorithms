// Time complexity of O(n) - Where n is the number of nodes in the Binary Search Tree.
// Space complexity of O(1) - Since we are not creating a new data structure based on the input.

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
