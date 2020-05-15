function wordSearch(words, word) {
  let width = words.length;

  let height = words[0].length;

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (words[i][j] === word[0]) {
        if (depthFirstSearch(0, i, j)) {
          return true;
        }
      }
    }
  }

  return false;

  function depthFirstSearch(index, x, y) {
    if (index === word.length) {
      return true;
    }

    if (!words[x] || !words[x][y]) {
      return false;
    }

    if (words[x][y] !== "" && words[x][y] === word[index]) {
      words[x][y] = "";

      if (depthFirstSearch(index + 1, x - 1, y)) {
        return true;
      }

      if (depthFirstSearch(index + 1, x + 1, y)) {
        return true;
      }

      if (depthFirstSearch(index + 1, x, y - 1)) {
        return true;
      }

      if (depthFirstSearch(index + 1, x, y + 1)) {
        return true;
      }
    }
  }
}

module.exports = wordSearch;
