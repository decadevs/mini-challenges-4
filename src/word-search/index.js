function wordSearch(words, word) {
  let list = {}
  let checked = []

  function Flag() {
    words.forEach((element, rootI) => {
      element.forEach((item, childI) => {
        list[rootI.toString() + childI.toString()] = item
      })
    });
  }

  let wordCopy
  match = false

  words.forEach((element, rootI) => {
    element.forEach((item, childI) => {
      Flag()
      checked = []
      wordCopy = word.split('')
      if (item == word[0]) {

        crawler(rootI, childI, 0)

        if (checked.join('') == word) {
          match = true
          return
        }

      }
    })
  });

  function crawler(row, col, matchIndex) {
   if (wordCopy.length == 0) {
     return
   }
    if (word[matchIndex] == wordCopy[0]) {
      checked.push(wordCopy.shift())
    }
    list[row.toString() + col.toString()] = null

    if ((row > 0) &&
      words[row - 1][col] == word[matchIndex + 1] &&
      list[(row - 1).toString() + col.toString()] !== null) {

      crawler(row - 1, col, matchIndex + 1)

    }
    if ((row < words.length - 1) &&
      words[row + 1][col] == word[matchIndex + 1] &&
      list[(row + 1).toString() + col.toString()] !== null) {

      crawler(row + 1, col, matchIndex + 1)

    }
    if (words[row][col - 1] == word[matchIndex + 1] &&
      list[row.toString() + (col - 1).toString()] !== null) {

      crawler(row, col - 1, matchIndex + 1)

    }
    if (words[row][col + 1] == word[matchIndex + 1] &&
      list[row.toString() + (col + 1).toString()] !== null) {

      crawler(row, col + 1, matchIndex + 1)

    }
  }

  return match
}

module.exports = wordSearch;
