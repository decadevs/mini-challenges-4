function wordSearch(words, word) {
  let m = words.length;
  let n = words[0].length;

  let result = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (check(words, word, i, j, 0)) {
        result = true;
      }
    }
  }

  return result;
}

function check(words, word, i, j, k) {
  let m = words.length;
  let n = words[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n) {
    return false;
  }

  if (words[i][j] == word.charAt(k)) {
    let temp = words[i][j];
    words[i][j] = '#';
    if (k == word.length - 1) {
      return true;
    } else if (check(words, word, i - 1, j, k + 1) ||
      check(words, word, i + 1, j, k + 1) ||
      check(words, word, i, j - 1, k + 1) ||
      check(words, word, i, j + 1, k + 1)) {
      return true;
    }
    words[i][j]=temp;
  }

  return false;
}


module.exports = wordSearch;
