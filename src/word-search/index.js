function wordSearch(words, word) {
  let width = words.length;

  let height = words[0].length;

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (words[i][j] === word[0]) {
        if (lookFor(0, i, j)) {
          return true;
        }
      }
    }
  }

  return false;

  function lookFor(index, x, y) {
    if (index === word.length) {
      return true;
    }

    if (!words[x] || !words[x][y]) {
      return false;
    }

    console.log(words[x]);

    if (
      x >= 0 &&
      x < words.length &&
      y >= 0 &&
      y < words[0].length &&
      words[x][y] === word[index]
    ) {
      words[x][y] = "";

      if (lookFor(index + 1, x - 1, y)) {
        return true;
      }

      if (lookFor(index + 1, x + 1, y)) {
        return true;
      }

      if (lookFor(index + 1, x, y - 1)) {
        return true;
      }

      if (lookFor(index + 1, x, y + 1)) {
        return true;
      }

      words[x][y] = word[index];
    }
  }
}

module.exports = wordSearch;
