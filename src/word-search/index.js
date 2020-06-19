function wordSearch(words, word) {
  let wordIndex = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[0].length; j++) {
      if (words[i][j] == word[0]) {
        if (dfs(words, i, j, word, wordIndex)) {
          console.log(words);
          return true;
        }
      }
    }
  }
  console.log(words);
  return false;
}

function dfs(words, i, j, word, index) {
  //base case
  if (index == word.length) {
    return true;
  }
  // boundary check
  if (
    i < 0 ||
    i >= words.length ||
    j < 0 ||
    j >= words[0].length ||
    words[i][j] != word[index]
  ) {
    return false;
  }

  // -1 alias for visited
  let temp = words[i][j];
  words[i][j] = "#";
  // console.log(words);
  if (
    dfs(words, i, j + 1, word, index + 1) ||
    dfs(words, i, j - 1, word, index + 1) ||
    dfs(words, i - 1, j, word, index + 1) ||
    dfs(words, i + 1, j, word, index + 1)
  ) {
    return true;
  }
  words[i][j] = temp;
  return false;
}

const words = [
  ["C", "A", "A"],
  ["A", "A", "A"],
  ["B", "C", "D"],
];

const word = "AAB";

console.log(wordSearch(words, word));
module.exports = wordSearch;
