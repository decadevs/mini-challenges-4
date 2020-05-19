
//#region - A function that creates key-value-pairs of all the letters in the array
// and store them in list object
function Flag(words, list) {
  words.forEach((element, rootI) => {
    element.forEach((item, childI) => {
      list[rootI.toString() + childI.toString()] = item
    })
  });
}
//#endregion

//#region - A dfs function that handles searching adjacent characters
// that matches with the next letter in the word
function crawler(row, col, matchIndex, checked, wordCopy, word, words, list) {
  if (wordCopy.length == 0) {
    return
  }
  if (word[matchIndex] == wordCopy[0]) {
    checked.push(wordCopy.shift())
  }

  //Set already matched letter to null in the list object
  list[row.toString() + col.toString()] = null

  //#region - All the if statements whithin this region simply checks all the adjacent letters
  // If there is a match, the dfs funtion is called recursively; passing the mathching
  // adjacent index values to it
  if ((row > 0) &&
    words[row - 1][col] == word[matchIndex + 1] &&
    list[(row - 1).toString() + col.toString()] !== null) {

    crawler(row - 1, col, matchIndex + 1, checked, wordCopy, word, words, list)

  }
  if ((row < words.length - 1) &&
    words[row + 1][col] == word[matchIndex + 1] &&
    list[(row + 1).toString() + col.toString()] !== null) {

    crawler(row + 1, col, matchIndex + 1, checked, wordCopy, word, words, list)

  }
  if (words[row][col - 1] == word[matchIndex + 1] &&
    list[row.toString() + (col - 1).toString()] !== null) {

    crawler(row, col - 1, matchIndex + 1, checked, wordCopy, word, words, list)

  }
  if (words[row][col + 1] == word[matchIndex + 1] &&
    list[row.toString() + (col + 1).toString()] !== null) {

    crawler(row, col + 1, matchIndex + 1, checked, wordCopy, word, words, list)

  }
  //#endregion

  // Check if already matched word is the same as the given word
  // if false we pop off the last matched letter and return
  if (checked.join('') !== word) {
    wordCopy.unshift(checked.pop())
    list[row.toString() + col.toString()] = wordCopy[0]
    return
  }
}
//#endregion

function wordSearch(words, word) {
  // A Object that holds all the letters in the given words array
  let list = {}
  let checked = []

  let wordCopy
  match = false

  //#region - Iterating through the graph to check the first match
  words.forEach((element, rootI) => {
    element.forEach((item, childI) => {

      //calling the fuction for each iteration to remove null values in the list object
      Flag(words, list)

      // an array that collects serial word mathes
      checked = []

      //making an array copy of the word to search
      wordCopy = word.split('')
      if (item == word[0]) {

        // calling the dfs function
        crawler(rootI, childI, 0, checked, wordCopy, word, words, list)

        if (checked.join('') == word) {
          match = true
          return
        }
      }
    })
  });
  //#endregion

  return match
}

module.exports = wordSearch;
