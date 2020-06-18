function wordSearch(words, word) {
    if (word === "") return true;

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === word[0]) {
                if (found(0, i, j)) return true;
            }
        }
    }
    return false;

    function found(index, i, j) {
        if (index === word.length) return true;
        if (!words[i] || !words[i][j]) return false;
        if (words[i][j] !== "" && words[i][j] === word[index]) {
            let char = words[i][j];
            words[i][j] = "";

            if (found(index + 1, i - 1, j)) return true;
            if (found(index + 1, i + 1, j)) return true;
            if (found(index + 1, i, j - 1)) return true;
            if (found(index + 1, i, j + 1)) return true;
            words[i][j] = char;
        }
        return false;
    }
}

module.exports = wordSearch;