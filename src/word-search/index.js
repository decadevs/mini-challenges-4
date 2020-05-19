function wordSearch(words, word) {

  function dfs(x, y, index) {
    if (x < 0 || x > words.length-1  || y < 0 || y > words[0].length) return false;
    if (words[x][y] !== word[index]) return false;
    if (index === word.length-1) return true;
    var orignalCharacter = words[x][y];

    words[x][y] = "#";//turn the word to # if visited

    if (
      dfs(x - 1, y, index + 1) == true || //up
      dfs(x + 1, y, index + 1) == true || //down
      dfs(x, y - 1, index + 1) == true || //left
      dfs(x, y + 1, index + 1) == true//right
    ) {
      return true;
    }
    words[x][y] = orignalCharacter; // backtracking
    return false;
  }

  let booleanArrayOfWordFoundUsingWordFirstLetter = [];
  for (var row = 0; row < words.length; row++) {
    for (var col = 0; col < words[row].length; col++) {
      if (words[row][col] == word[0]) {
        booleanArrayOfWordFoundUsingWordFirstLetter.push(dfs(row, col, 0));
        if (dfs(0, row, col)) return true;
      }
    }
  }
  return true
    ? booleanArrayOfWordFoundUsingWordFirstLetter.indexOf(true) > -1
    : false;
}

module.exports = wordSearch;
