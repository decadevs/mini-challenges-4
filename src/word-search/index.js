const wordSearch = (board, word) => {

  let result = false;
  const transvereGrid = (row, col, i) => {
    if (!result) {
      //base case
      if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;
      if (board[row][col] != word[i]) return; // wrong character, over
      if (i == word.length - 1) { // found a correct path
        result = true;
        return;
      }
      board[row][col] = null; // mark as visited

      //recursive case
      transvereGrid(row + 1, col, i + 1)
      transvereGrid(row - 1, col, i + 1)
      transvereGrid(row, col + 1, i + 1)
      transvereGrid(row, col - 1, i + 1)
      board[row][col] = word[i] // reset board
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        transvereGrid(i, j, 0)
        if (result) return result;
      }
    }
  }

  return result;
};

module.exports = wordSearch;
