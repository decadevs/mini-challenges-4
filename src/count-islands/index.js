function countIslands(grid) {

    let count = 0;


    const graph = new Graph(grid);



    const visited = new Array(graph.numRow).fill(false)
        .map(() => new Array(graph.numCol).fill(false));


    for (let i = 0; i < graph.numRow; i++) {
        for (let j = 0; j < graph.numCol; j++) {

            if (!visited[i][j] && graph.matrix[i][j] === 1) {
                graph.dfs(i, j, visited);
                count++;
            }
        }
    }

    return count;
}

module.exports = countIslands;