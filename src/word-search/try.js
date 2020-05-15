function wordSearch(words, word) {
  if (words.length === 0 || word.length === 0) {
    return false
  };

  wordArray = word.split(""); 

  let current = wordArray[0]; 

  for (row = 0; row < words.length; row++) {
    for (col = 0; col < words[row].length; col++) {
      if (words[row][col] === current) {
        wordArray.shift(); wordArray
        console.log(current);
        
        check(words, current, row, col); 

      } else {
        words[row][col] = ""
        check(words, current, row, col)
      }
    }
  }
  return true
}


const check = (words, current, row, col) => {
  words[row][col] = ""

  if (words[row] == undefined || words[row][col] == undefined || words[row][col] == "") {
    return false;
  }

  current = word[0];


  check(words, current, row + 1, col)
  check(words, current, row - 1, col)
  check(words, current, row, col + 1)
  check(words, current, row, col - 1)

  return true
}


console.log(wordSearch([
  ["C", "D", "Y", "C", "X"],
  ["A", "N", "Y", "Z", "X"],
  ["T", "F", "Z", "A", "T"],
  ["M", "D", "B", "U", "T"],
],

  "CAT"));
 
console.log(wordSearch([
    ["O", "A", "V", "P", "Z"],
    ["H", "S", "I", "F", "X"],
    ["T", "M", "A", "K", "K"],
    ["S", "U", "B", "E", "Y"],
  ], "FISH"));

console.log(wordSearch([
        ["P", "R", "A", "B", "C"],
        ["R", "N", "O", "O", "T"],
        ["E", "A", "I", "O", "O"],
        ["C", "I", "S", "E", "L"],
      ], "PRECISELY"));


console.log(wordSearch([
  ["D", "S", "A", "N", "C"],
  ["I", "N", "O", "I", "T"],
  ["T", "A", "T", "R", "O"],
  ["M", "F", "O", "U", "T"],
],

"SANCTIONS"));
  

