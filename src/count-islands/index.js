const wordSearch = require("../word-search");

function countIslands(grid) {

    var count = 0;
	let n = grid.length;
	if (n == 0) return 0;
	let m = grid[0].length;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++)
			if (grid[i][j] == '1') {
				DFS(grid, i, j);
				++count;
			}
	}
    return count;};
    
    function DFS(grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] != '1') return;
	grid[row][col] = '0';
	DFS(grid, row + 1, col);
	DFS(grid, row - 1, col);
	DFS(grid, row, col + 1);
	DFS(grid, row, col - 1);
}


    
module.exports = countIslands;
