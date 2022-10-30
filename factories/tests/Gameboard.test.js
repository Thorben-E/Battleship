import Gameboard from '../Gameboard'

test('place ship', () => {
    let gameboard1 = new Gameboard()
    gameboard1.placeShip(gameboard1.ship3,4,4)
    expect(gameboard1.board[4][4][0]).toEqual({"hits": 0, "length": 2})
})

test('receiveAttack when miss', () => {
    let gameboard1 = new Gameboard()
    expect(gameboard1.recieveAttack(4,4)).toBe('Miss!')
})

test('receiveAttack when hit ', () => {
    let gameboard1 = new Gameboard()
    gameboard1.placeShip(gameboard1.ship3,4,4)
    expect(gameboard1.recieveAttack(4,4)).toBe('Hit!')
})

test('keep track of missed attacks', () => {
    let gameboard1 = new Gameboard()
    gameboard1.recieveAttack(4,4)
    expect(gameboard1.missedShots[0]).toStrictEqual([4,4])
})

//works
test.skip('issunk when every ship has sank', () => {
    let gameboard1 = new Gameboard()
    gameboard1.placeShip(gameboard1.ship4, 4, 4)
    gameboard1.recieveAttack(4,4)
    gameboard1.recieveAttack(4,5)
    expect(gameboard1.allShipsSunk(gameboard1.board)).toBe(true)
})

test('allShipsSunk when not all ships been sunk', () => {
    let gameboard1 = new Gameboard()
    gameboard1.placeShip(gameboard1.ship4, 4, 4)
    expect(gameboard1.allShipsSunk(gameboard1.board)).toBe(false)
})