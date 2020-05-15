/*Steps to word search

1. get index positions of each letter of word from words
2. while visited not empty
a. for each of the row,col pair, compute the adjacents left, adjacent bottom from the pair,
b. updated visited with adjacent positon pair if is same as index position pair of word
c. get alphabet representations of visited pairs from words
d. if all word is in alpha reprensation- then the word was found
*/

const words = [
  ["C", "D", "Y", "C", "X"],
  ["A", "N", "Y", "Z", "X"],
  ["T", "F", "Z", "A", "T"],
  ["M", "D", "B", "U", "T"],
];

const word="CAT"
function wordSearch(words, word) {

    let wordIndex = [];
    for (let p = 0; p < words.length; p++) {
      for (m = 0; m < words[p].length; m++) {
        if (word.includes(words[p][m])) {
          wordIndex.push([p, m]);
        }
      }
    }
    console.log(wordIndex)

    let i =0
    let words_length=words.length
    let visited=[]
    visited.push(wordIndex[0]) //initialize visited with first index array
    let index_row=visited[0]
    let index_col=visited[1]

    while(i<visited.length){
        let row_index=visited[i][0]
        let col_index=visited[i][1]

        let right_ajacent_index=[row_index,col_index+1]
        let bottom_ajacent_index=[row_index+1,col_index]

        





    }






}

console.log(wordSearch(words,word))

module.exports = wordSearch;
