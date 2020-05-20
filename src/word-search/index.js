function wordSearch(words, word) {
  let stack = [];
  let item;
  let index;
  for (let i = 0; i < words.length; i += 1) {
    for (let j = 0; j < words[i].length; j += 1) {
      let letterIndex;
      if (words[i][j] == word[0]) {
        stack.push([i, j]);
        letterIndex = 0;
        let checked = []
        checked.push([i, j].join(''))
        while (stack.length !== 0) {
          index = stack.length - 1;
          item = stack[index];
           const below = words[item[0] + 1] === undefined ? false : [item[0] + 1, item[1]]
           const above = words[item[0] - 1] === undefined ? false : [item[0] - 1, item[1]]
           const right = words[item[1] + 1] === undefined ? false : [item[0], item[1] + 1]
           const left = words[item[1] - 1] === undefined ? false : [item[0], item[1] - 1]

          if(below !== false && !checked.includes(below.join('')) && words[below[0]][below[1]] === word[letterIndex+1]){
            letterIndex += 1
            stack.push(below)
            checked.push(below.join('') )
          }else if( above !== false && !checked.includes(above.join('')) && words[above[0]][above[1]] === word[letterIndex+1]) {
            letterIndex += 1
            stack.push(above)
            checked.push(above.join(''))
          }else if (right !== false && !checked.includes(right.join('')) && words[right[0]][right[1]] === word[letterIndex+1]) {
            letterIndex += 1
            stack.push(right)
            checked.push(right.join(''))
          }else if(left !== false && !checked.includes(left.join('')) && words[left[0]][left[1]] === word[letterIndex+1]) {
            letterIndex += 1
            stack.push(left)
            checked.push(left.join(''))
          }else {
            stack.pop()
            checked.push((item))
            letterIndex -= 1
          }
          if (letterIndex === word.length - 1) {
            return true
          }
        }
      }
    }
  }
  return false;
}

module.exports = wordSearch;
