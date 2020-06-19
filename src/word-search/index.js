function wordSearch(words, word) {
    let tracker = 0;
    let result = false
    for (let i = 0; i< words.length; ++i) {
        for (let j = 0; j < words[i].length; ++j) {
            if(searchWord(words, i, j, word, tracker)) result = true;
        }
    }
    return result;
}

function searchWord (graph, yAxis, xAxis, word, tracker) {
    if (yAxis < 0 || xAxis < 0 || yAxis > graph.length - 1 || xAxis > graph[yAxis] - 1) {
        return false
    };
    if (graph[yAxis][xAxis] === word[tracker]) {
        graph[yAxis][xAxis] = '?';
        if(tracker === word.length-1) return true;
        if (
            searchWord(graph, yAxis - 1, xAxis, word, tracker + 1)|| // Go up and search
            searchWord(graph, yAxis + 1, xAxis, word, tracker + 1)|| // Or go down and search
            searchWord(graph, yAxis, xAxis - 1, word, tracker + 1)|| // Or go left and search
            searchWord(graph, yAxis, xAxis + 1, word, tracker + 1)
        ) return true;
        graph[yAxis][xAxis] = word[tracker];
    };
    return false;
    
}
module.exports = wordSearch;
