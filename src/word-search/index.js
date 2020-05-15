function wordSearch(words, word) {
  function deepFirstSearch(x, y, index) {
    if (x < 0 || x > words.length - 1 || y < 0 || y > words.length - 1)
      return false;
    if (words[x][y] !== word[index]) return false;
    if (index === word.length - 1) return true;

    var orignalCharacter = words[x][y];
    words[x][y] = "#"; //turn the word to # if visited

    if (
      deepFirstSearch(x - 1, y, index + 1) == true || //up
      deepFirstSearch(x + 1, y, index + 1) == true || //down
      deepFirstSearch(x, y - 1, index + 1) == true || //left
      deepFirstSearch(x, y + 1, index + 1) == true //right
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
        booleanArrayOfWordFoundUsingWordFirstLetter.push(
          deepFirstSearch(row, col, 0)
        );
      }

    }
  }
  
  return true
    ? booleanArrayOfWordFoundUsingWordFirstLetter.indexOf(true) > -1
    : false;
}

module.exports = wordSearch;
