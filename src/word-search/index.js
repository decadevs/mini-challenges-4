// function wordSearch(words, word) {
//   if (words.length === 0 || word.length === 0) {
//     return false
//   };

//   wordArray = word.split("");

//   current = wordArray[0];

//   for (row = 0; row < words.length; row++) {
//     for (col = 0; col < words[row].length; col++) {
//       if (words[row][col] === current) {
//         wordArray.shift();
//         current = word[0]
//         check(words, current, row, col)
        
//       } else {
//         words[row][col] = ""
//         check(words, current, row, col)
//       }
//     }
//   }
//   return true
// }


// const check = (words, current, row, col) => {
//   words[row][col] = ""

//   if (words[row] == undefined || words[row][col] == undefined || words[row][col] == "") {
//     return false;
//   }

//   current = word[0];


//   check(words, current, row + 1, col)
//   check(words, current, row - 1, col)
//   check(words, current, row, col + 1)
//   check(words, current, row, col - 1)

//   return true
// }

function wordSearch(words, word) {
  if ((words.length || word.length) == 0) {
    return false
  }
  let wordArr = word.split('');
  wordArr
  let stepLetterInWord = wordArr[0];
  stepLetterInWord
  pass = []

  for (row in words) {
    for (col in words[row]) {
      let currentStepInWords = words[row][col]
      if (currentStepInWords == stepLetterInWord) {
        pass.push(word[row][col]);
        pass
        words[row][col] = "";
        console.log(words);
        wordArr.shift();
        stepLetterInWord = wordArr[0]
        console.log(stepLetterInWord);
      }
    }
  }
  if (word === pass.join('')) return true
  return false
}


module.exports = wordSearch;
