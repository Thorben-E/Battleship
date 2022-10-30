export { boardDisplay1 }
const boardDisplay1 = (array) => {
    array.forEach(array => {
        array.forEach(array => {
            let cell = document.createElement('div')
            cell.append(array[0])
            let board = document.getElementById('board1')
            board.append(cell)
        })
    })
}