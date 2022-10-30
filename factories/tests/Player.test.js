import Gameboard from '../Gameboard'
import Player from '../Player'

test('Player get created', () => {
    let player1 = new Player(true)
    expect(player1).toEqual({"turn": true})
})

test('enemy gets turn after attack', () => {
    let gameboard1 = new Gameboard()
    gameboard1.recieveAttack(4,4)
})