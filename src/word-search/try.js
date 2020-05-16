function wordSearch(words, word) {
  if ((words.length  || word.length) == 0 ) {
   return false
  }
  let wordArr = word.split(''); 
  let stepLetterInWord = wordArr[0]; stepLetterInWord
  pass=[]
  
  for (row in words) {
    for (col in words[row]) { 
      let currentStepInWords = words[row][col]
      if (currentStepInWords == stepLetterInWord) {
        words[row][col] = "";
        
        check(words, wordArr, row, col)
      }
    }
  }
  // console.log(pass.join(''))
  // if(word === pass.join('')) return true
  return false
}

function check(words, wordArr, row, col) {
  if (words[row] == undefined || words[row][col] == undefined || words[row][col] == "" ) {
    return false
  }

  wordArr.shift();
  
  stepLetterInWord = wordArr[0]
  if (words[row][col] == stepLetterInWord) {
    words[row][col] = "";
  }
  console.log(words);
  
  

  check(words, wordArr, row + 1, col)
  check(words, wordArr, row - 1, col)
  check(words, wordArr, row, col + 1)
  check(words, wordArr, row, col - 1)

  return true

}


console.log(
  wordSearch([
    ["D", "E", "C", "A", "C"],
    ["E", "D", "E", "O", "N"],
    ["E", "A", "D", "D", "O"],
    ["C", "G", "O", "E", "G"],
    ["C", "A", "N", "C", "A"],
],
"DECAGON"
  ));


console.log(
  wordSearch([
  ["P", "R", "A", "B", "C"],
  ["R", "N", "O", "O", "T"],
  ["E", "A", "I", "O", "O"],
  ["C", "I", "S", "E", "L"],
  ], "PRECISELY")
);


// console.log(
//   wordSearch([
//   ["C", "D", "Y", "C", "X"],
//   ["A", "N", "Y", "Z", "X"],
//   ["T", "F", "Z", "A", "T"],
//   ["M", "D", "B", "U", "T"],
//   ],
//     "CAT")
// );

//   // should be true

// console.log(wordSearch([
//     ["O", "A", "V", "P", "Z"],
//     ["H", "S", "I", "F", "X"],
//     ["T", "M", "A", "K", "K"],
//     ["S", "U", "B", "E", "Y"],
//   ], "FISH"));


// console.log(wordSearch([
//   ["D", "S", "A", "N", "C"],
//   ["I", "N", "O", "I", "T"],
//   ["T", "A", "T", "R", "O"],
//   ["M", "F", "O", "U", "T"],
// ],

//   "SANCTIONS"));



