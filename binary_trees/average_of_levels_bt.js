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
