import Gameboard from "../factories/Gameboard"
import Ship from "../factories/Ship"
import Player from "../factories/Player"

function attack(e) {
    let coordinateString = e.target.id
    let coordinateArray = coordinateString.split(',')
    console.log(parseInt(coordinateArray[0]),parseInt(coordinateArray[1]))
    gameboard2.receiveAttack(parseInt(coordinateArray[0]),parseInt(coordinateArray[1]))
}

export default attack