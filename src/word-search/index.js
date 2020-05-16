/*Steps to word search

1. get index positions of each letter of word from words
2. while visited not empty
a. for each of the row,col pair, compute the adjacents left, adjacent bottom from the pair,
b. updated visited with adjacent positon pair if is same as index position pair of word
c. get alphabet representations of visited pairs from words
d. if all word is in alpha reprensation- then the word was found
*/

// const words = [
//   ["D", "S", "A", "N", "C"],
//   ["I", "N", "O", "I", "T"],
//   ["T", "A", "T", "R", "O"],
//   ["M", "F", "O", "U", "T"],
// ];

// const word="SANCTIONS"

function wordSearch(words, word) {
  let wordIndex = [];
  for (let p = 0; p < words.length; p++) {
    for (m = 0; m < words[p].length; m++) {
      if (word.includes(words[p][m])) {
        wordIndex.push([p, m]);
      }
    }
  }

  
  if (word[0] === word[word.length - 1]) {
      //check if the word appears only once
      let count = words.reduce(function (acc, curr) {
        if (curr.includes(word[0])) {
          acc += 1;
        }
        return acc;
      }, 0);
      if(count<2){
        return false;
      }
  }

  let i = 0;
  let visited = [];
  visited.push(wordIndex[0]); //initialize visited with first index array

  while (i < visited.length) {
    let row_index = visited[i][0];
    let col_index = visited[i][1];

    let right_ajacent_index = [row_index, col_index + 1];
    let bottom_ajacent_index = [row_index + 1, col_index];
    let left_ajacent_index = [row_index, col_index - 1];
    let top_ajacent_index = [row_index - 1, col_index];

    for (let x = 0; x < wordIndex.length; x++) {
      if (
        JSON.stringify(wordIndex[x]) === JSON.stringify(right_ajacent_index) &&
        visited.every(
          (e) => JSON.stringify(e) !== JSON.stringify(right_ajacent_index)
        )
      ) {
        visited.push(right_ajacent_index);
      }
      if (
        JSON.stringify(wordIndex[x]) === JSON.stringify(bottom_ajacent_index) &&
        visited.every(
          (e) => JSON.stringify(e) !== JSON.stringify(bottom_ajacent_index)
        )
      ) {
        visited.push(bottom_ajacent_index);
      }
      if (
        JSON.stringify(wordIndex[x]) == JSON.stringify(left_ajacent_index) &&
        visited.every(
          (e) => JSON.stringify(e) !== JSON.stringify(left_ajacent_index)
        )
      ) {
        visited.push(left_ajacent_index);
      }
      if (
        JSON.stringify(wordIndex[x]) === JSON.stringify(top_ajacent_index) &&
        visited.every(
          (e) => JSON.stringify(e) !== JSON.stringify(top_ajacent_index)
        )
      ) {
        visited.push(top_ajacent_index);
      }
    }

    i += 1;
  }

  let alphabet_pos_visited = [];

  for (let j = 0; j < visited.length; j++) {
    alphabet_pos_visited.push(words[visited[j][0]][visited[j][1]]);
  }

  let count = 0;
  for (let w = 0; w < word.length; w++) {
    if (alphabet_pos_visited.includes(word[w])) {
      count += 1;
    }
  }

  if (count === word.length) {
    return true;
  } else {
    return false;
  }
}

module.exports = wordSearch;
