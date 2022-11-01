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
    }
    recieveAttack(x,y) {
        if (this.checkForShot(x,y)) {
            if (this.board[y][x].length === 0) {
                this.missedShots.push([x,y])
                //this.player.turn = false
                //enemy player turn = true
                return 'Miss!'
            } else {
                this.hitShots.push([x,y])
                let hitShip = this.board[y][x][0]
                hitShip.hit()
                //this.player.turn = false
                //enemy player turn = true
                return 'Hit!'
            }
        }
    }
    checkForShot(x,y) {
        if (!this.missedShots.includes([x,y])) {
            if (!this.hitShots.includes([x,y])) {
                return true
            }
        }
    }
    allShipsSunk(array) {
        let result = []
            array.forEach(array => {
                array.forEach(array => {
                    if (array.length > 0) {
                        if (array[0].hits > 0) {
                            result.push(array)
                        }
                    }
                })
            })
            if (result.length >= 12) {
                return true
            } else {
                return false
            }
    }
}

export default Gameboard