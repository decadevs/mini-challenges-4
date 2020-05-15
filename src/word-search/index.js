function wordSearch(words, word) {
  let list = {}
  let checked = []
  words.forEach((element, rootI) => {
    element.forEach((item, childI) => {
      list[rootI.toString() + childI.toString()] = item
    })
  });
  let wordCopy = word.split()
  let count = 0
  match = false

  words.forEach((element, rootI) => {
    element.forEach((item, childI) => {
      if (item == word[0] &&
        list[rootI.toString() + childI.toString()] !== null) {
        crawler(rootI, childI, 0)
        if (checked.length == word.length) {
          match = true
          return
        }
      }
      //if (match) return
      checked = []
    })
    //if(match) return
  });

  function crawler(row, col, matchIndex) {
    count++
    checked.push(row.toString() + col.toString())
    list[row.toString() + col.toString()] = null
    if (checked.length == word.length) {
      return true
    }

    if ((row > 0) &&
      words[row - 1][col] == word[matchIndex + 1] &&
      list[(row - 1).toString() + col.toString()] !== null) {
      //count++
      crawler(row - 1, col, matchIndex + 1)
      //return
    } else if ((row < words.length - 1) &&
      words[row + 1][col] == word[matchIndex + 1] &&
      list[(row + 1).toString() + col.toString()] !== null) {

      crawler(row + 1, col, matchIndex + 1)

    } else if (words[row][col - 1] == word[matchIndex + 1] &&
      list[row.toString() + (col - 1).toString()] !== null) {

      crawler(row, col - 1, matchIndex + 1)

    } else if (words[row][col + 1] == word[matchIndex + 1] &&
      list[row.toString() + (col + 1).toString()] !== null) {

      crawler(row, col + 1, matchIndex + 1)

    }
  }

  return match
}

module.exports = wordSearch;
