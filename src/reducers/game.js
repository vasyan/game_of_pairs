import { BOARD_MARK_AS_OPENED } from './board'

export const GAME_START = 'GAME_START'
export const GAME_FINISH = 'GAME_FINISH'
export const GAME_FLUSH = 'GAME_FLUSH'

const defaultState = {
  score: 0,
  startTime: 0,
  play: false,
  finish: false
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case BOARD_MARK_AS_OPENED:
      return {
        ...state,
        score: state.score + 1
      }

    case GAME_START:
      return {
        ...state,
        finish: false,
        score: 0,
        play: true,
        startTime: Date.now()
      }

    case GAME_FINISH:
      return {
        ...state,
        play: false,
        finish: true
      }

    case GAME_FLUSH:
      return {
        ...defaultState
      }

    default:
      return state
  }
}
