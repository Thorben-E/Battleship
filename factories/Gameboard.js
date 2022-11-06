import Ship from './Ship'
import Player from './Player'

class Gameboard {
    constructor() {
        this.board = [
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]]
        ];
        this.ship1 = new Ship(1);
        this.ship2 = new Ship(2);
        this.ship3 = new Ship(2);
        this.ship4 = new Ship(3);
        this.ship5 = new Ship(4);
        this.missedShots = [];
        this.hitShots = [];
        this.allShots = this.missedShots.concat(this.hitShots)
    }
    placeShip(ship, x, y) {
        if (ship.length === 1) {
            this.board[y][x] = [ship]
        } else if (ship.length === 2) {
            this.board[y][x] = [ship]
            this.board[y][x+1] = [ship]
        } else if (ship.length === 3) {
            this.board[y][x] = [ship]
            this.board[y][x+1] = [ship]
            this.board[y][x+2] = [ship]
        } else if (ship.length === 4) {
            this.board[y][x] = [ship]
            this.board[y][x+1] = [ship]
            this.board[y][x+2] = [ship]
            this.board[y][x+3] = [ship]
        }
        console.log(`${ship} has been placed`)
    }
    recieveAttack(x,y, boardname) {
        if (this.checkForShot(x,y, boardname)) {
            if (this.board[y][x].length === 0) {
                return true
            } else {
                let hitShip = this.board[y][x][0]
                hitShip.hit()
                //this.player.turn = false
                //enemy player turn = true
                return false
            }
        } else {
            console.log('field has been shot')
            return 'field has been shot already'
        }
    }
    checkForShot(x,y, boardname) {
        const shot = document.querySelector(`[data-x="${x}"][data-y="${y}"][data-board="${boardname}"]`)
        if (shot.textContent === 'M' || shot.innerHTML === 'X') {
            return false
        } else {
            return true
        }
    }
        
    allShipsSunk(gameboard) {
        const hits = gameboard.ship1.hits + gameboard.ship2.hits + gameboard.ship3.hits + gameboard.ship4.hits + gameboard.ship5.hits
        if (hits >= 12) {
            return true
        } else {
            return false
        }
    }
}

export default Gameboard