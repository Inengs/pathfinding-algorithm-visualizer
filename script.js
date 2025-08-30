const gridButton = document.getElementById('grid-size-button') // captures button to select size of grid
let rows = 20; let columns = 20; // sets initial value of rows and columns to 20 each
let grid = [] // initializes grid to an empty array


function undefinedRowFunc(_, rowNumber) {
    return Array(cols).fill().map(function (_, columnNumber) { // Creates a new array with cols number of empty slots, it then fills all those empty slots with undefined, and then performs a function on each of the array values and then returns an object
        return ({
            x: rowNumber,
            y: columnNumber,
            isWall: false,
            isStart: rowNumber === 0 && columnNumber === 0,
            isEnd: rowNumber === rows - 1 && columnNumber === cols - 1,
        })
    })
}
function initializeGrid() {
    grid = Array(rows).fill().map(undefinedRowFunc)  // Creates: [[{x:0,y:0,...}, {x:0,y:1,...}], [{x:1,y:0,...}, {x:1,y:1,...}]]
    // A proper 2D array of objects
}


function renderGrid() {
    const container = document.getElementById('grid-container')
}
function updateGrid() {

}
gridButton.onClick = updateGrid;