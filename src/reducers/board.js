import shuffle from 'lodash/shuffle'
import deck from '../data/deck'
import { LEVEL_EASY, LEVEL_MEDIUM, LEVEL_HARD } from '../config'

export const LEVELS = ['easy', 'medium', 'hard']
export const BOARD_CREATE = 'BOARD_CREATE'
export const BOARD_MARK_AS_OPENED = 'BOARD_MARK_AS_OPENED'

const LENGTH = {
  [LEVELS[0]]: LEVEL_EASY,
  [LEVELS[1]]: LEVEL_MEDIUM,
  [LEVELS[2]]: LEVEL_HARD
}

const defaultState = {
  data: [],
  level: LEVELS[0]
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case BOARD_CREATE:
      const board = []
      const level = (payload && payload.level) || LEVELS[0]
      let length = LENGTH[level]
      length = (length * length) / 8
      const modul = length - Math.floor(length)
      length = Math.floor(length)

      let counter = 0
      let card

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < 4; j++) {
          card = deck[j * 13 + i]
          board.push({ ...card, id: counter++ })
          board.push({ ...card, id: counter++ })
        }
      }

      if (modul) {
        for (let i = 0; i < modul * 4; i++) {
          card = deck[length + i]
          board.push({ ...card, id: counter++ })
          board.push({ ...card, id: counter++ })
        }
      }

      return {
        level,
        data: shuffle(board)
      }

    case BOARD_MARK_AS_OPENED:
      return {
        ...state,
        data: state.data.map(item => {
          return {
            ...item,
            isOpened: item.isOpened || payload.hand.includes(item.id)
          }
        })
      }

    default:
      return state
  }
}
