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

  function search(index, x, y) {
    if(index === word.length) return true
    if(!words[x] || !words[x][y]) return false
    if(words[x][y] !== "#" && words[x][y] === word[index]) {
      let ch = words[x][y]
      words[x][y] = "#"

      if(search(index + 1, x - 1, y)) return true
      if(search(index + 1, x + 1, y)) return true
      if(search(index + 1, x, y - 1)) return true
      if(search(index + 1, x, y + 1)) return true
      words[x][y] = ch
    }
    return false
  }
}

module.exports = wordSearch;
