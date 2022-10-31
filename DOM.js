export { boardDisplay1, boardDisplay2 }
const boardDisplay1 = (array) => {
    array.forEach(array => {
        array.forEach(array => {
            let cell = document.createElement('div')
            if (array.length > 0) {
                console.log(array[0].length)
                cell.append(array[0].length)
            }
            cell.classList.add('cell')
            let board = document.getElementById('board1')
            board.append(cell)
        })
    })
}

const boardDisplay2 = (array) => {
    array.forEach(array => {
        array.forEach(array => {
            let cell = document.createElement('div')
            if (array.length > 0) {
                let box = array[0].length
                cell.append(box)
            }
            cell.classList.add('cell')
            let board = document.getElementById('board2')
            board.append(cell)
        })
    })
}