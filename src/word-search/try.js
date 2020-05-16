function wordSearch(board, word) {
    let m = board.length;
    let n = board[0].length;

    let result = false;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
           if(dfs(board, word, i, j, 0)){
               result = true;
           }
        }
    }

    return result;
}

function dfs(board, word, i, j, k){
    let m = board.length;
    let n = board[0].length;

    if(i < 0 || j < 0 || i >= m || j >= n){
        return false;
    }

    if(board[i][j] == word.charAt(k)){
        let temp = board[i][j];
        board[i][j]='#';
        if(k==word.length - 1){
            return true;
        }else if(dfs(board, word, i-1, j, k+1)
        ||dfs(board, word, i+1, j, k+1)
        ||dfs(board, word, i, j-1, k+1)
        ||dfs(board, word, i, j+1, k+1)){
            return true;
        }
        board[i][j]=temp;
    }

    return false;
}

console.log(wordSearch(
[
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"],
],

  "AAB"
));


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


console.log(
  wordSearch([
  ["C", "D", "Y", "C", "X"],
  ["A", "N", "Y", "Z", "X"],
  ["T", "F", "Z", "A", "T"],
  ["M", "D", "B", "U", "T"],
  ],
    "CAT")
);

  // should be true

console.log(wordSearch([
    ["O", "A", "V", "P", "Z"],
    ["H", "S", "I", "F", "X"],
    ["T", "M", "A", "K", "K"],
    ["S", "U", "B", "E", "Y"],
  ], "FISH"));


console.log(wordSearch([
  ["D", "S", "A", "N", "C"],
  ["I", "N", "O", "I", "T"],
  ["T", "A", "T", "R", "O"],
  ["M", "F", "O", "U", "T"],
],

  "SANCTIONS"));



