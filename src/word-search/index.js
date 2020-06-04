/*
- use recursion method (method that calls itself)
- use depth first search


- if there are no words return false;
- the first loop i will be used to keep track of the outer loop i.e. the rows
- the second loop j will be used to keep track of the inner loop i.e. the columns
- if the grid at any point has the letters it should push to the variable;

- figure out how to keep track of the word search
  - modify?
*/

function wordSearch(words, word) {
    let rows = words.length
    let columns = words[0].length
    if (word === '') return false;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (words[i][j] === word[i]) {
                console.log(word[i]);
                if (wordCheck(i, j)) return true;
            }
        }
    }
    return false;

    function wordCheck(i, j) {
        console.log(i, j);

        if ((i === word.length)) return true;
        if (!words[i] || !words[i][j]) return false;


        if (wordCheck(i + 1, j)) return true;
        if (wordCheck(i - 1, j)) return true;
        if (wordCheck(i, j - 1)) return true;
        if (wordCheck(i, j + 1)) return true;

        return false;
    }
}

// words = [
//     ["C", "D", "Y", "C", "X"],
//     ["A", "N", "Y", "Z", "X"],
//     ["T", "F", "Z", "A", "T"],
//     ["M", "D", "B", "U", "T"],
// ];

// word = "CAT";

words = [
    ["D", "S", "A", "N", "C"],
    ["I", "N", "O", "I", "T"],
    ["T", "A", "T", "R", "O"],
    ["M", "F", "O", "U", "T"],
];

word = "SANCTIONS";
console.log(wordSearch(words, word));


module.exports = wordSearch;