function wordSearch(words, word) {
    for (let i = 0; i< words.length; ++i) {
        for (let j = 0; j < words[i].length; ++j) {
            if (words[i][j] === word[0]) {

            }
        }
    }
}

function searchWords (graph, yAxis, xAxis, VISITED) {
    if (yAxis < 0 || xAxis < 0 || yAxis > graph.length - 1 || xAxis > graph[yAxis] - 1) {
        return false
    };
    
}
module.exports = wordSearch;
