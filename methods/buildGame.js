import Gameboard from "../factories/Gameboard";
import Player from "../factories/Player";
import { endgame, startgame, addDragToStartPopup } from "./DOM";

const buildGame = () => {
  //players
  const player1 = new Player(true);
  const computer = new Player(false);

  //gameboards
  const gameboard1 = new Gameboard();
  const gameboard2 = new Gameboard();

  const computerPlaceShips = () => {
    gameboard2.placeShip(gameboard2.ship1, Math.floor(Math.random() * 8), 2);
    gameboard2.placeShip(gameboard2.ship2, Math.floor(Math.random() * 7), 0);
    gameboard2.placeShip(gameboard2.ship3, Math.floor(Math.random() * 7), 3);
    gameboard2.placeShip(gameboard2.ship4, Math.floor(Math.random() * 6), 5);
    gameboard2.placeShip(gameboard2.ship5, Math.floor(Math.random() * 4), 7);
  };

  const attack = (e) => {
    if (e.target.textContent != "") {
      alert("choose another field");
      return;
    }
    const x = e.target.getAttribute("data-x");
    const y = e.target.getAttribute("data-y");
    if (gameboard2.recieveAttack(x, y, "computer")) {
      const cell = document.querySelector(
        `[data-x="${x}"][data-y="${y}"][data-board="computer"]`
      );
      cell.classList.add("miss");
      cell.classList.remove('cell');
      cell.textContent = "M";
    } else {
      const cell = document.querySelector(
        `[data-x="${x}"][data-y="${y}"][data-board="computer"]`
      );
      cell.classList.add("hit");
      cell.classList.remove('cell');
      cell.textContent = "X";
    }

    if (gameboard2.allShipsSunk(gameboard2)) {
      endgame("player", "You won!");
    }
    checkIfShot();
  };

  const chooseCoordinates = () => {
    const cx = Math.floor(Math.random() * 8);
    const cy = Math.floor(Math.random() * 8);
    return [cx, cy];
  };

  const checkIfShot = () => {
    const arr = chooseCoordinates();
    const cx = arr[0];
    const cy = arr[1];
    if (
      document.querySelector(
        `[data-x="${cx}"][data-y="${cy}"][data-board="player"]`
      ).textContent != ""
    ) {
      checkIfShot();
    } else {
      computerAttack(cx, cy);
    }
  };

  const computerAttack = (cx, cy) => {
    if (gameboard1.recieveAttack(cx, cy, "player")) {
      const cell = document.querySelector(
        `[data-x="${cx}"][data-y="${cy}"][data-board="player"]`
      );
      cell.classList.add("miss");
      cell.textContent = "M";
    } else {
      const cell = document.querySelector(
        `[data-x="${cx}"][data-y="${cy}"][data-board="player"]`
      );
      cell.classList.add("hit");
      cell.classList.remove('placed')
      cell.textContent = "X";
    }

    if (gameboard1.allShipsSunk(gameboard1)) {
      endgame("computer", 'You lost!');
    }
  };

  const buildDOMboard = (boardName) => {
    const boardClass = document.getElementById(`${boardName}`);
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-x", j);
        cell.setAttribute("data-y", i);
        cell.setAttribute("data-board", boardName);
        // adds attacking through DOM
        if (boardName === "computer") {
          cell.addEventListener("click", (e) => {
            attack(e);
          });
        } else if (boardName === "player") {
        }
        boardClass.append(cell);
      }
    }
  };

  const showPlayerShips = () => {
    gameboard1.board.forEach(array => {
      array.forEach(item => {
        if (item.length > 0) {
          let cy = gameboard1.board.indexOf(array)
          let cx = array.indexOf(item)
          const cell = document.querySelector(`[data-x="${cx}"][data-y="${cy}"][data-board="player"]`)
          cell.classList.add('placed')
        }
      })
    })
  }

  const startgameButton = () => {
    console.log(typeof document.getElementById('ships').childNodes)
    if (document.getElementById("ships").childNodes.length === 6) {
      const cells = document.querySelectorAll(".cell1");
      cells.forEach((cell) => {
        if (cell.childNodes.length != 0) {
          let x = parseInt(cell.getAttribute("data-x"));
          let y = parseInt(cell.getAttribute("data-y"));
          gameboard1.placeShip(gameboard1[cell.firstChild.id], x, y);
        }
      });
      document.getElementById("startgame").remove();
      document.getElementById('container').classList.remove('background')
      document.querySelector('footer').classList.add('background')
      showPlayerShips()
    } else {
        alert("first place all the ships");
        window.location.reload();
    }
  };

  startgame();
  computerPlaceShips();
  buildDOMboard("player");
  buildDOMboard("computer");
  addDragToStartPopup();
  document.getElementById("startgameButton").onclick = startgameButton;
};

export default buildGame;