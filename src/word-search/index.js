function wordSeartemp(words, word) {
  if (word === "") return true;

  for (var row = 0; row < words.length; row++) {
    for (var col = 0; col < words[row].length; col++) {
      if (words[row][col] === word[0]) {
        if (transversal(0, row, col)) return true;
      }
    }
  }
  return false;
  function transversal(wordPosition, x, y) {
    if (wordPosition === word.length) return true;
    if (!words[x] || !words[x][y]) return false;
    if (words[x][y] !== '%%' && words[x][y] === word[wordPosition]) {
      let tempStorage = words[x][y];
      words[x][y] = '%%';

      if (transversal(wordPosition + 1, x - 1, y)) return true; //up
      if (transversal(wordPosition + 1, x + 1, y)) return true; //down
      if (transversal(wordPosition + 1, x, y - 1)) return true; //left
      if (transversal(wordPosition + 1, x, y + 1)) return true; //right
      words[x][y] = tempStorage; // backtracking
    }
    return false;
  }
};



module.exports = wordSeartemp;
