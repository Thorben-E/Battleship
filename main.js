import './style.css'
import { boardDisplay1 } from './DOM'
import Gameboard from './factories/Gameboard'
import Ship from './factories/Ship'
import Player from './factories/Player'

let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'style.css';
head.append(link)
function gameloop() {
    const player1 = new Player(true)
    const computer = new Player(false)
    const gameboard1 = new Gameboard()
    const gameboard2 = new Gameboard()
    gameboard1.placeShip(gameboard1.ship1, 1, 1)
    gameboard1.placeShip(gameboard1.ship2, 2, 2)
    gameboard1.placeShip(gameboard1.ship3, 3, 3)
    gameboard1.placeShip(gameboard1.ship4, 5, 5)
    gameboard1.placeShip(gameboard1.ship5, 4, 4)
    gameboard2.placeShip(gameboard2.ship1, 1, 1)
    gameboard2.placeShip(gameboard2.ship2, 2, 2)
    gameboard2.placeShip(gameboard2.ship3, 3, 3)
    gameboard2.placeShip(gameboard2.ship4, 5, 5)
    gameboard2.placeShip(gameboard2.ship5, 4, 4)
    boardDisplay1(gameboard1.board)
};

gameloop()