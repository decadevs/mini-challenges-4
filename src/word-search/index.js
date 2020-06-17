function wordSearch(words, word) {
  const findLink = (words, x, y, checked, word_index) => {
    if (x < 0 || x > words.length - 1 || y < 0 || y > words[x].length - 1)
      return;

    if (checked[x][y] === true) return;

    if (words[x][y] !== word[word_index]) return;

    checked[x][y] = true;

    if (word_index === word.length - 1) {
      return true;
    }

    // @traversing four possible directions (left, right, up, down)
    if (
      findLink(words, x - 1, y, checked, word_index + 1) ||
      findLink(words, x + 1, y, checked, word_index + 1) ||
      findLink(words, x, y - 1, checked, word_index + 1) ||
      findLink(words, x, y + 1, checked, word_index + 1)
    ) {
      return true;
    } else {
      checked[x][y] = false;
    }
  };

  // @boolean 2D Array of equal size with words
  // to help keep track of the visited node
  let checked = [];
  for (let i = 0; i < words.length; i++) {
    checked.push([]);
  }

  for (let x = 0; x < words.length; x++) {
    for (let y = 0; y < words[x].length; y++) {
      if (!checked[x][y] && words[x][y] === word[0]) {
        if (findLink(words, x, y, checked, 0)) return true;
      }
    }
  }

  return false;
}

module.exports = wordSearch;
