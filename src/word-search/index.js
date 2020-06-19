function wordSearch(words, word) {
  if(word === "") return true

  for(let row = 0; row < words.length; row++) {
    for(let col = 0; col < words[row].length; col++) {
      if(words[row][col] === word[0]) {
        if(search(0, row, col)) return true
      }
    }
  }
  return false

  function search(index, row1, col1) {
    if(index === word.length) return true
    if(!words[row1] || !words[row1][col1]) return false
    if(words[row1][col1] !== "#" && words[row1][col1] === word[index]) {
      words[row1][col1] = "#"

      if(search(index + 1, row1 - 1, col1)) return true
      if(search(index + 1, row1 + 1, col1)) return true
      if(search(index + 1, row1, col1 - 1)) return true
      if(search(index + 1, row1, col1 + 1)) return true
    }
    return false
  }
}

module.exports = wordSearch;
