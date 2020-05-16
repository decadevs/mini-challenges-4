function wordSearch(words, word) {
    if (!Array.isArray(words) || typeof word != "string") {
        throw Error("Unsupported data types");
    }

    const ROW_LEN = words.length;
    const COL_LEN = words[0].length;
    const WORD_LEN = word.length;
    let queue = []
    let answer = 0;

    // helper function
    function isArrayInArray(arr, item) {
        itemToString = JSON.stringify(item);
        return arr.some(function(ele) {
            return JSON.stringify(ele) === itemToString;
        });
    }

    // helper function
    function depthSearch(row, col, wordIndexCount, queue) {
        if(words[row][col] !== word[wordIndexCount] || isArrayInArray(queue, [row, col])) {
            queue.pop();
            return;
        } else if (wordIndexCount === WORD_LEN - 1) {
            answer = 1;
            return
        }

        queue.push([row, col])
        wordIndexCount++;

        if (col + 1 < COL_LEN) {
            depthSearch(row, col + 1, wordIndexCount, queue);
        }

        if (col - 1 >= 0) {
            depthSearch(row, col - 1, wordIndexCount, queue);
        }

        if (row - 1 >= 0) {
            depthSearch(row - 1, col, wordIndexCount, queue);
        }

        if (row + 1 < ROW_LEN) {
            depthSearch(row + 1, col, wordIndexCount, queue);
        }
    }


    for (let i = 0; i < ROW_LEN; i++) {
        for (let j = 0; j < COL_LEN; j++) {
            if (words[i][j] !== word[0]) {
                continue;
            }
            queue = [];
            depthSearch(i, j, 0, queue);

            if (answer) {
                return true;
            }
        }
    }

    if (answer) {
        return true;
    }
    return false;
}

module.exports = wordSearch;
