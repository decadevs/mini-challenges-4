function wordSearch(words, word) {
    if (!Array.isArray(words) || typeof word != "string") {
        throw Error("Unsupported data types");
    }

    const ROW_LEN = words.length;
    const COL_LEN = words[0].length;
    const WORD_LEN = word.length;
    let queue = [];
    let index;
    let currentIndex;
    let wordIndexCount = 0;
    let answer = 0;

    // helper function
    function isArrayInArray(arr, item) {
        itemToString = JSON.stringify(item);
        return arr.some(function(ele) {
            return JSON.stringify(ele) === itemToString;
        });
    }

    // helper function
    function depthSearch(index, wordIndexCount, queue) {
        if(wordIndexCount === WORD_LEN) {
            answer = 1;
            return;
        }
        if (words[index[0]][index[1]] !== word[wordIndexCount] || isArrayInArray(queue, index)) {
            queue = [];
            return;
        }

        queue.push(index);
        if (index[1] + 1 < COL_LEN) {
            currentIndex = [index[0], index[1] + 1]
            depthSearch(currentIndex, wordIndexCount + 1, queue);
        }

        if (index[1] - 1 >= 0) {
            currentIndex = [index[0], index[1] - 1];
            depthSearch(currentIndex, wordIndexCount + 1, queue);
        }

        if (index[0] + 1 < ROW_LEN) {
            currentIndex = [index[0] + 1, index[1]]
            depthSearch(currentIndex, wordIndexCount + 1, queue);
        }

        if (index[0] - 1 >= 0) {
            currentIndex = [index[0] - 1, index[1]];
            depthSearch(currentIndex, wordIndexCount + 1, queue);
        }
    }


    for (let i = 0; i < ROW_LEN; i++) {
        for (let j = 0; j < COL_LEN; j++) {
            if (words[i][j] !== word[wordIndexCount]) {
                continue;
            }
            currentIndex = [i, j];
            depthSearch(currentIndex, wordIndexCount, queue);

            if (answer) {
                return true;
            }
        }
    }
    return false;
}

module.exports = wordSearch;
