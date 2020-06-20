/*
- use recursion method (method that calls itself)
- use depth first search

- the first loop i will be used to keep track of the outer loop i.e. the rows
- the second loop j will be used to keep track of the inner loop i.e. the columns
- if the letters in the words at any point is equal to the word it should return true
- keep track of the word search by marking letters as visited once we've iterated over it
  - 
*/

function wordSearch(words, word) {
    let row = words.length;
    let column = words[0].length;
    let wordLen = word.length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (words[i][j] === word[0] && wordCheck(i, j, 0)) return true;
        }
    }
    return false;

    function wordCheck(i, j, wordIndex) {
        if (wordIndex === wordLen) return true;
        if (i >= row || i < 0 || words[i][j] !== word[wordIndex]) return false;

        words[i][j] = "V";

        if (wordCheck(i - 1, j, wordIndex + 1) ||
            wordCheck(i + 1, j, wordIndex + 1) ||
            wordCheck(i, j - 1, wordIndex + 1) ||
            wordCheck(i, j + 1, wordIndex + 1)) return true;

        words[i][j] = word[wordIndex];
        return false;
    }

};


// words = [
//     ["C", "D", "Y", "C", "X"],
//     ["A", "N", "Y", "Z", "X"],
//     ["T", "F", "Z", "A", "T"],
//     ["M", "D", "B", "U", "T"],
// ];

// word = "CAT";

// words = [
//     ["D", "S", "A", "N", "C"],
//     ["I", "N", "O", "I", "T"],
//     ["T", "A", "T", "R", "O"],
//     ["M", "F", "O", "U", "T"],
// ];

// word = "SANCTIONS";

const words = [
    ["G", "A", "T", "J", "M"],
    ["R", "G", "R", "G", "N"],
    ["A", "M", "A", "K", "E"],
    ["N", "M", "A", "E", "U"],
    ["D", "L", "R", "R", "Q"],
    ["M", "Y", "M", "A", "A"],
];

const word = "GRAMMARLY";
console.log(wordSearch(words, word));


module.exports = wordSearch;