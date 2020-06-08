function dfs(words, i, j, word, count) {
  if (
    i < 0 ||
    j < 0 ||
    i >= words.length ||
    j >= words[i].length ||
    words[i][j] !== word.charAt(count)
  ) {
    return;
  }
  if (count === word.length) {
    return true;
  }
  let temp = words[i][j];
  words[i][j] = "";
  const top = dfs(words, i - 1, j, word, count + 1);
  const right = dfs(words, i, j + 1, word, count + 1);
  const bottom = dfs(words, i + 1, j, word, count + 1);
  const left = dfs(words, i, j - 1, word, count + 1);

  words[i][j] = temp;
  return top || right || bottom || left;
}
function wordSearch(words, word) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === word.charAt(0) && dfs(words, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = wordSearch;
