import attack from "./attack"

const boardDisplay1 = (bigarray) => {
    bigarray.forEach(array => {
        array.forEach(element => {
            let cell = document.createElement('div')
            if (element.length > 0) {
                cell.append(array[0].length)
                cell.classList.add('ship')
                let board = document.getElementById('board1')
                cell.setAttribute('id', bigarray.indexOf(array)+','+array.indexOf(element))
                board.append(cell)
            } else {
                cell.classList.add('cell')
                let board = document.getElementById('board1')
                cell.setAttribute('id', bigarray.indexOf(array)+','+array.indexOf(element))
                board.append(cell)
            }
            cell.addEventListener('click', attack)
        })
    })
}

const boardDisplay2 = (bigarray) => {
    bigarray.forEach(array => {
        array.forEach(element => {
            let cell = document.createElement('div')
            if (element.length > 0) {
                cell.append(array[0].length)
                cell.classList.add('ship')
                let board = document.getElementById('board2')
                cell.setAttribute('id', bigarray.indexOf(array)+','+array.indexOf(element))
                board.append(cell)
            } else {
                cell.classList.add('cell')
                let board = document.getElementById('board2')
                cell.setAttribute('id', bigarray.indexOf(array)+','+array.indexOf(element))
                board.append(cell)
            }
            cell.addEventListener('click', attack)
        })
    })
}

export { boardDisplay1, boardDisplay2 }
