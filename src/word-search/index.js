function wordSearch(words, word) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[0].length; j++) {
      if (words[i][j] === word[0]) {
        if (nextChar(0,i,j)) {
          return true;
        }
      }
    }
  }
  return false;

  function nextChar(charIndex, rowIndex, colIndex) {

    if (charIndex === word.length) {
      return true;
    }

    if (!words[rowIndex] || !words[rowIndex][colIndex]) {
        return;
    }

    if (words[rowIndex][colIndex] !== word[charIndex]) {
      return;
  }
    if (words[rowIndex][colIndex] !== "#" &&
      words[rowIndex][colIndex] === word[charIndex]) {
      words[rowIndex][colIndex] = "#";

      if (nextChar(charIndex + 1, rowIndex - 1, colIndex)) {
        return true;
      }

      if (nextChar(charIndex + 1, rowIndex + 1, colIndex)) {
        return true;
      }

      if (nextChar(charIndex + 1, rowIndex, colIndex - 1)) {
        return true;
      }

      if (nextChar(charIndex + 1, rowIndex, colIndex + 1)) {
        return true;
      }
      
    }

    words[rowIndex][colIndex] = word[charIndex];
  }
}

module.exports = wordSearch;
