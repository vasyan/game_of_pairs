function generateDeck() {
  const suits = ['h', 's', 'c', 'd']
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'j',
    'q',
    'k',
    'a'
  ]
  const deck = []

  let id = 0
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({ id, value, suit })
      id++
    })
  })

  return deck
}

export default generateDeck()
