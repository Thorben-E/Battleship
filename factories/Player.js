import Ship from './Ship'
import Gameboard from './Gameboard'

class Player {
    constructor(turn) {
        this.turn = turn
    }
    takeTurn(x,y) {
        gameboard2.recieveAttack(x,y)
        //check if allShipsSunk
    }
    computerTurn() {
        let coordinates = [this.randomNum(8),this.randomNum(8)]
        if (gameboard1.allShots.includes(coordinates)) {
            this.computerTurn()
            return
        } else {
            gameboard1.recieveAttack(x,y)
        }
        //add x and y to array
        //if array contains x and y, choose again
        //check if allShipsSunk
    }
    randomNum(max) {
        const num = Math.floor(Math.random() * max)
        return num
    }
}

export default Player