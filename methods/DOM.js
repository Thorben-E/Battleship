export { endgame, startgame }



const endgame = (winner) => {
        const winnerPopup = `<div class="endgame">
      <h2>GAME OVER</h2>
      <p>${winner} has won the game</p>
      <p>Play again?</p>
      <div class="buttons">
        <button id="newGame">Yes</button>
      </div>
    `
        const container = document.getElementById('container')
        const endgamePopup = document.createRange().createContextualFragment(winnerPopup)
        container.append(endgamePopup)
        document.getElementById('newGame').onclick = newGame
}

const newGame = () => {
        window.location.reload()
}

const startgame = () => {
  const startPopup = `<div class="startgame" id="startgame">
      <h2>Choose your ships!</h2>
      <p>Drag every ship on the board and click play</p>
      <div id="field" class="board"></div>
      <div class="ships" id="ships">
        <div class="ship1" id="ship1" draggable="true"></div>
        <div class="ship2" id="ship2" draggable="true"></div>
        <div class="ship3" id="ship3" draggable="true"></div>
        <div class="ship4" id="ship4" draggable="true"></div>
        <div class="ship5" id="ship5" draggable="true"></div>
      </div>
      <button id="startgameButton" class="startgameButton">Play</button>
`
  const container = document.getElementById('container')
  const startgamePopup = document.createRange().createContextualFragment(startPopup)
  container.append(startgamePopup)
  const field = document.getElementById('field')
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell1');
      cell.setAttribute('data-x', j);
      cell.setAttribute('data-y', i);
      field.append(cell);

    }
  }
}