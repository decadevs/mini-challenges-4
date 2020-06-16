function wordSearch(words, word) {
    if (word === "") return true;

    for (var row = 0; row < words.length; row++) {
        for (var col = 0; col < words[row].length; col++) {
            if (words[row][col] === word[0]) {
                if (dfs(0, row, col)) return true;
            }
        }
    }
    return false;

    function dfs(index, x, y) {
        if (index === word.length) return true;
        if (!words[x] || !words[x][y]) return false;
        if (words[x][y] !== ' ' && words[x][y] === word[index]) {
            var ch = words[x][y];
            words[x][y] = ' ';

            if (dfs(index + 1, x - 1, y)) return true; //up
            if (dfs(index + 1, x + 1, y)) return true; //down
            if (dfs(index + 1, x, y - 1)) return true; //left
            if (dfs(index + 1, x, y + 1)) return true; //right
            words[x][y] = ch; // backtracking
        }
        return false;
    }
}

module.exports = wordSearch;