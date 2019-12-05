// Leetcode 130

// Time complexity O(r * c) - where r and c are the number of row and columns in the input board.
// Space complexity O(1) - No additional data structures used.

// INPUT
// X X X X
// X O O X
// X X O X
// X O X X

// RESULT
// X X X X
// X X X X
// X X X X
// X O X X

const dfs = (row, col, board) => {
  if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) {
    return;
  }

  if (board[row][col] === 'O') {
    board[row][col] = 'T';

    dfs(row + 1, col, board);
    dfs(row - 1, col, board);
    dfs(row, col + 1, board);
    dfs(row, col - 1, board);
  }
};

const solve = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        row === 0 ||
        col === 0 ||
        row === board.length - 1 ||
        col === board[row].length - 1
      ) {
        dfs(row, col, board);
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 'T') {
        board[row][col] = 'O';
      } else {
        board[row][col] = 'X';
      }
    }
  }
};
