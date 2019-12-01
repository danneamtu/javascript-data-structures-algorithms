// Time complexity of O(n) - Where n is the number of nodes in the Tree.
// Space complexity of O(n) - Where n is the length of the returned results array.

const averageOfLevels = root => {
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    let sum = 0;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      sum += current.val;
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left) {
        queue.push(current.left);
      }
    }
    result.push(sum / size);
  }
  return result;
};
