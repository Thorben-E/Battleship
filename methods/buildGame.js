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
        if (e.target.textContent != '') {
            alert('choose another field')
            return
        }
        const x = e.target.getAttribute('data-x')
        const y = e.target.getAttribute('data-y')
        if (gameboard2.recieveAttack(x,y, 'computer')) {
            const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"][data-board="computer"]`)
            cell.classList.add('miss')
            cell.textContent = 'M'
        } else {
            const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"][data-board="computer"]`)
            cell.classList.add('hit')
            cell.textContent = 'X'
        }

        if (gameboard2.allShipsSunk(gameboard2)) {
            console.log(alert('ai '))
        }
        checkIfShot()
    }

    const chooseCoordinates = () => {
        const cx = Math.floor(Math.random() * 8)
        const cy = Math.floor(Math.random() * 8)
        return [cx, cy]
    }

    const checkIfShot = () => {
        const arr = chooseCoordinates()
        const cx = arr[0]
        const cy = arr[1]
        console.log(cx,cy)
        console.log(document.querySelector(`[data-x="${cx}"][data-y="${cy}"][data-board="player"]`))
        if (document.querySelector(`[data-x="${cx}"][data-y="${cy}"][data-board="player"]`).textContent != '') {
            checkIfShot()
        } else {
            computerAttack(cx,cy)
        }
    }

    const computerAttack = (cx,cy) => {
        if (gameboard1.recieveAttack(cx,cy, 'player')) {
            const cell = document.querySelector(`[data-x="${cx}"][data-y="${cy}"][data-board="player"]`)
            cell.classList.add('miss')
            cell.textContent = 'M'
        } else {
            const cell = document.querySelector(`[data-x="${cx}"][data-y="${cy}"][data-board="player"]`)
            cell.classList.add('hit')
            cell.textContent = 'X'
        }

        if (gameboard1.allShipsSunk(gameboard1)) {
            alert('player ded')
        }
    }
    

    const buildDOMboard = (boardName) => {
        const boardClass = document.getElementById(`${boardName}`);
        for (let i = 0; i < 8; i += 1) {
            for (let j = 0; j < 8; j += 1) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-x', j);
                cell.setAttribute('data-y', i);
                cell.setAttribute('data-board', boardName)

                // adds attacking through DOM
                if (boardName === 'computer') {
                  cell.addEventListener('click', (e) => {
                    attack(e);
                  });
                } else if (boardName === 'player') {
                  
                };
                boardClass.append(cell);
            }
        }
    };

    buildDOMboard('player')
    buildDOMboard('computer')


    const updateShips = (bigarray, boardname) => {
        bigarray.forEach(array => {
            array.forEach(element => {
                if (element.length > 0) {
                    const x = array.indexOf(element)
                    const y = bigarray.indexOf(array)
                    if (element[0].type === 'ship') {
                        const selectedcell = document.querySelector(`[data-x="${x}"][data-y="${y}"][data-board="${boardname}"]`)
                        if (boardname === 'player') {
                            selectedcell.textContent = 'X'   
                        }
                    }   else if (element[0] === 'missedShot') {
                        const selectedcell = document.querySelector(`[data-x="${x}"][data-y="${y}"][data-board="${boardname}"]`)
                        if (boardname === 'player') {
                            selectedcell.textContent = 'M'   
                        }
                    } 
                }
            })
        })
    }

    /* updateShips(gameboard2.board, "player")
    updateShips(gameboard1.board, "computer") */
};

export default buildGame