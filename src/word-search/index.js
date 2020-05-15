function wordSearch(words, word) {
  let wordArr = word.split("");
  const rowLength = words.length;
  const colLength = words[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (words[row][col] === wordArr[0]) {
        wordArr.shift();
      }
    }
  }
  return wordArr.length === 0 && true;
}

module.exports = wordSearch;
