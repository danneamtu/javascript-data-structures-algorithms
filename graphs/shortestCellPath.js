// Time complexity of O(R * C) - Where we visit every element in the grid and mark it as visited.
// Space complexity of O(R * C) - Since we are storing elements in queue and visited.

function shortestCellPath(
  grid,
  startingRow,
  startingColumn,
  targetRow,
  targetColumn,
) {
  const queue = [[startingRow, startingColumn, 0]];

  const visited = new Set([`${startingRow}${startingColumn}`]);

  while (queue.length) {
    const [currentRow, currentColumn, currentDepth] = queue.shift();

    if (currentRow === targetRow && currentColumn === targetColumn) {
      return currentDepth;
    }

    for (let [nextRow, nextColumn] of [
      [currentRow - 1, currentColumn],
      [currentRow + 1, currentColumn],
      [currentRow, currentColumn - 1],
      [currentRow, currentColumn + 1],
    ]) {
      let newVisited = `${nextRow}${nextColumn}`;

      if (
        nextRow >= 0 &&
        nextRow < grid.length &&
        nextColumn >= 0 &&
        nextColumn < grid[0].length &&
        grid[nextRow][nextColumn] === 1 &&
        !visited.has(newVisited)
      ) {
        queue.push([nextRow, nextColumn, currentDepth + 1]);
        visited.add(newVisited);
      }
    }
  }

  return -1;
}
