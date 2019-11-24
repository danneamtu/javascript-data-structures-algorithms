function shortestCellPath(grid, sr, sc, tr, tc) {
  const queue = [[sr, sc, 0]];

  const visited = new Set([`${sr}${sc}`]);

  while (queue.length) {
    const [r, c, depth] = queue.shift();
    if (r === tr && c === tc) {
      return depth;
    }

    for (let [nr, nc] of [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1]
    ]) {
      let newVisited = `${nr}${nc}`;
      if (
        nr >= 0 &&
        nr < grid.length &&
        nc >= 0 &&
        nc < grid[0].length &&
        grid[nr][nc] === 1 &&
        !visited.has(newVisited)
      ) {
        queue.push([nr, nc, depth + 1]);
        visited.add(newVisited);
      }
    }
  }

  return -1;
} 


// time complexity of O(R * C), where we visit every element and mark them as visited
// space complexity of O(R * C), since we are storing elements in queue and visited