import Ship from '../Ship'

test('hit ship', () => {
    let ship = new Ship(3)
    ship.hit()
    expect(ship.hits).toBe(1);
  });

test('isSunk when sunk', () => {
  let ship = new Ship(3)
  ship.hit()
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(true)
})

test('isSunk when not sunk', () => {
  let ship = new Ship(3)
  expect(ship.isSunk()).toBe(false)
})