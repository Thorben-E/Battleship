import Gameboard from '../factories/Gameboard'
import Player from '../factories/Player'
import { endgame, startgame } from './DOM';

const buildGame = () => {
    //players
    const player1 = new Player(true)
    const computer = new Player(false)
    
    //gameboards
    const gameboard1 = new Gameboard()
    const gameboard2 = new Gameboard()

    const computerPlaceShips = () => {
        gameboard2.placeShip(gameboard2.ship1, Math.floor(Math.random() * 8), 2)
        gameboard2.placeShip(gameboard2.ship2, Math.floor(Math.random() * 7), 0)
        gameboard2.placeShip(gameboard2.ship3, Math.floor(Math.random() * 7), 3)
        gameboard2.placeShip(gameboard2.ship4, Math.floor(Math.random() * 6), 5)
        gameboard2.placeShip(gameboard2.ship5, Math.floor(Math.random() * 4), 7)
    }

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
            endgame('player')
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
            endgame('computer')
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


    const addDragToStartPopup = () => {
        const draggables = []
        const containers = document.querySelectorAll('.cell1')
        for (let i=1;i<6;i++) {
            draggables.push(document.getElementById(`ship${i}`))
        }
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging')
            })
        })

        draggables.forEach(draggable => {
            draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
            })
        })

        containers.forEach(container => {
            container.addEventListener('dragover', e => {
                e.preventDefault()
                const draggable = document.querySelector('.dragging')
                container.appendChild(draggable)
            })
        })
    }


    const startgameButton = () => {
        if (document.getElementById('ships').childNodes.length != 0) {
            const cells = document.querySelectorAll('.cell1')
            cells.forEach(cell => {
                if (cell.childNodes.length != 0) {
                    let ship = `gameboard.${cell.firstChild.getAttribute('id')}`
                    console.log(ship)
                    console.log(typeof ship)
                    let x = cell.firstChild.getAttribute('data-x')
                    let y = cell.firstChild.getAttribute('data-y')
                    gameboard1.placeShip(ship,x,y)
                }
            })
            document.getElementById('startgame').remove()
        } else {
            alert('first place all the ships')
            window.location.reload()
        }
    }

    startgame()
    computerPlaceShips()
    buildDOMboard('player')
    buildDOMboard('computer')
    addDragToStartPopup()
    document.getElementById('startgameButton').onclick = startgameButton
};

export default buildGame