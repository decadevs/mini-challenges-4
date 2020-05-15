function wordSearch(words, word) {
  let result = false;

  let splitWord = word.split('');

  const nextChar = function (words, rowIndex, colIndex) {
    if (rowIndex < 0 || rowIndex >= words.length ||
      colIndex < 0 || colIndex >= words[0].length ||
      words[rowIndex][colIndex] !== splitWord[0] ||
      words[rowIndex][colIndex] === "#") {
        return;
    }

    let removeChar = splitWord.shift();
    if (splitWord.length == 0) {
      result = true;
    }

    else {
      result = false;
    }

    words[rowIndex][colIndex] = "#";

    let row = [-1,1,0,0];
    let col = [0,0,-1,1];
    for (let k = 0; k < row.length; k++) {
      nextChar(words, rowIndex + row[k], colIndex + col[k]);
    }
    if (result === false) {
      splitWord.unshift(removeChar);
    }
  }

  for (let i = 0; i < words.length; i++) {
    for(let j = 0; j < words[0].length; j++) {
      if(words[i][j] === splitWord[0] && splitWord[0] === splitWord[1]) {
        result = true;
      }
      else if(words[i][j] === splitWord[0] && splitWord[0] !== splitWord[1]) {
        nextChar(words,i,j);
      }
      if (result === true) break;
    }
  }
  return result;
}

module.exports = wordSearch;
