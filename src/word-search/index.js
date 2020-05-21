function wordSearch(words, word) {
    let adjacentArr = []
    let adjacentLetterArr = []
    let queue = []
    let count = 0
    for (let row = 0; row < words.length; row++){
        let rowAdjacentArr = []
        let rowAdjacentLetters = []
        for (let column = 0; column < words[row].length; column++){
            const adjacents = adjacent(words.length, words[row].length, [row, column])
            rowAdjacentArr.push(adjacents);
            let adjacentLetters = []
            for (const adjacent of adjacents){
                const letter = words[adjacent[0]][adjacent[1]]
                adjacentLetters.push(letter)
            }
            rowAdjacentLetters.push(adjacentLetters)
        }
        adjacentArr.push(rowAdjacentArr)
        adjacentLetterArr.push(rowAdjacentLetters)
    }
    console.log(adjacentArr, adjacentLetterArr)
    return;
}
//  Function to fetch the adjacent positions of a position in the grid
function adjacent(rowLength, columnLength, position){
    const top = position[0]===0 ? false : [position[0]-1, position[1]]
    const bottom = position[0]===rowLength ? false : [position[0]+1, position[1]]
    const right = position[1]===columnLength ? false : [position[0], position[1]+1]
    const left = position[1]===0 ? false : [position[0], position[1]-1]
    
    return [top, right, bottom, left].filter(Boolean);
}

module.exports = wordSearch;

console.log(wordSearch([
    ["C", "D", "Y", "C", "X"],
    ["A", "N", "Y", "Z", "X"],
    ["T", "F", "Z", "A", "T"],
    ["M", "D", "B", "U", "T"],
  ], "CAT"));
  console.log(wordSearch([
    ["C", "A", "Y", "C", "X"],
    ["O", "N", "A", "Z", "X"],
    ["T", "F", "D", "A", "T"],
    ["M", "D", "B", "U", "T"],
  ], "CANADA"));