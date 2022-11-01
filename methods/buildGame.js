import Gameboard from '../factories/Gameboard'
import Player from '../factories/Player'

const buildGame = () => {
    //players
    const player1 = new Player(true)
    const computer = new Player(false)
    
    //gameboards
    const gameboard1 = new Gameboard()
    const gameboard2 = new Gameboard()

    //player ships
    gameboard1.placeShip(gameboard1.ship1, 1, 1)
    gameboard1.placeShip(gameboard1.ship2, 2, 2)
    gameboard1.placeShip(gameboard1.ship3, 3, 3)
    gameboard1.placeShip(gameboard1.ship4, 5, 5)
    gameboard1.placeShip(gameboard1.ship5, 4, 4)
    
    //computer ships
    gameboard2.placeShip(gameboard2.ship1, 1, 1)
    gameboard2.placeShip(gameboard2.ship2, 2, 2)
    gameboard2.placeShip(gameboard2.ship3, 3, 3)
    gameboard2.placeShip(gameboard2.ship4, 5, 5)
    gameboard2.placeShip(gameboard2.ship5, 4, 4)

    const attack = (e) => {
    let coordinateString = e.target.id
    let coordinateArray = coordinateString.split(',')
    const x = parseInt(coordinateArray[0])
    const y = parseInt(coordinateArray[1])
    console.log(gameboard2.recieveAttack(x,y))

    if (gameboard2.allShipsSunk(gameboard2.board)) {
        console.log(alert('ai lost'))
    }}
    

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
                cell.addEventListener('click', (e) => {attack(e)})
            })
        })
    }

    boardDisplay1(gameboard1.board)
    boardDisplay2(gameboard2.board)
};

export default buildGame