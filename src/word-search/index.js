function wordSearch(words, word) {
    let adjacentArr = []
    let stack = []
    //  Get adjacent positions of each letter in the array.
    for (let row = 0; row < words.length; row++){
        let rowAdjacentArr = []
        for (let column = 0; column < words[row].length; column++){
            const adjacents = adjacent(words.length, words[row].length, [row, column])
            rowAdjacentArr.push(adjacents);
        }
        adjacentArr.push(rowAdjacentArr)
    }
    //  Trace word
    let visited = []
    for (let row = 0; row < words.length; row++){
        for (let column = words[0].length-1; column > -1; column--){
            wordArr = word.split('')
            //  find letters in word using DFS
            if (words[row][column] === wordArr[0]){
                stack = []
                stack.push([row,column])
                visited.push([row,column])
                wordArr.shift()
                const traced = DFS(row, column, adjacentArr, stack, words, word, wordArr, visited)
                if (traced === true)
                    return traced;
            }
        }
    }
    return false;
}
//  Function to fetch the adjacent positions of each letter in the array of letters
function adjacent(rowLength, columnLength, position){
    const top = position[0]===0 ? false : [position[0]-1, position[1]]
    const bottom = position[0]===rowLength ? false : [position[0]+1, position[1]]
    const right = position[1]===columnLength ? false : [position[0], position[1]+1]
    const left = position[1]===0 ? false : [position[0], position[1]-1]
    
    return [right, left, bottom, top].filter(Boolean);
}

//  Helper functions
//  Depth First Search function
function DFS(row, column, allAdjacents, stack, words, word, wordArr, visited){
    //   Stack up letters that match alphabets in the word.
    let letters = []
    let adjacentArr = allAdjacents[row][column]
    for (let index = 0; index < adjacentArr.length; index++){
        const position = adjacentArr[index]
        if (position[0] < words.length && position[1] < words[0].length){
            if (words[position[0]][position[1]] === wordArr[0]  && isVisited(position, visited) === false && isVisited(position, stack) === false){
                stack.push(position)
                visited.push(position)
                wordArr.shift()
                for (let letterPosition of stack){
                    letters.push(words[letterPosition[0]][letterPosition[1]])
                }
                //  Check the word formed so far.
                const str = letters.join('')
                if (str === word.substring(0, str.length)){
                    if (str === word){
                        return true
                    }
                    //  If word formed so far is a substring of the word being searched for, continue to traverse
                    const spot = stack[stack.length-1]
                    let result = DFS(spot[0], spot[1], allAdjacents, stack, words, word, wordArr, visited)
                    return result;
                }
                //  If word formed so far is not a substring of the word being searched remove the leter that does not belong
                stack.pop()   
                wordArr.unshift(letters.pop())
                console.log(wordArr, letters)
                const spot = stack[stack.length-1]
                let result = DFS(spot[0], spot[1], allAdjacents, stack, words, word, wordArr, visited)
                return result;   
            }  

        }
    }    
}

//  Function to check if a position has been visited
function isVisited(position, visitedPositions){
    for (const spot of visitedPositions){
        if (spot.toString() === position.toString())
            return true
    }
    return false
}
module.exports = wordSearch;
