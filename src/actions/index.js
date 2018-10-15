import find from 'lodash/find'
import { BOARD_CREATE, BOARD_MARK_AS_OPENED } from '../reducers/board'
import { HAND_PICK, HAND_FLUSH } from '../reducers/hand'
import { GAME_START, GAME_FINISH, GAME_FLUSH } from '../reducers/game'

export function createGame(newLevel) {
  return (dispatch, getState) => {
    const level = newLevel || getState().board.level

    dispatch(flushHand())

    dispatch({
      type: GAME_FLUSH
    })

    dispatch({
      type: BOARD_CREATE,
      payload: { level }
    })
  }
}

function flushHand() {
  return {
    type: HAND_FLUSH
  }
}

let flushTimeout

function clearFlushTimeout() {
  if (flushTimeout) {
    clearTimeout(flushTimeout)
    flushTimeout = null
  }
}

export function selectCard(id) {
  return (dispatch, getState) => {
    clearFlushTimeout()

    const { hand, board } = getState()

    if (hand.length === 2) {
      dispatch(flushHand())
    }

    const handCard = find(board.data, { id: hand[0] })
    const newCard = find(board.data, { id })

    if (
      hand.length === 1 &&
      handCard.value === newCard.value &&
      handCard.suit === newCard.suit
    ) {
      dispatch({
        type: BOARD_MARK_AS_OPENED,
        payload: { hand: [hand[0], id] }
      })

      setTimeout(() => {
        const newScore = getState().game.score

        if (newScore === board.data.length / 2) {
          dispatch(finishGame())
        }
      }, 0)
    }

    if (hand.length > 0) {
      flushTimeout = setTimeout(() => {
        const { hand } = getState()

        if (hand.length === 2) {
          dispatch(flushHand())
        }
      }, 1000)
    }

    dispatch({ type: HAND_PICK, payload: { id } })
  }
}

export function startGame() {
  return dispatch => {
    dispatch(flushHand())
    dispatch(createGame())
    dispatch({
      type: GAME_START
    })
  }
}

export function finishGame() {
  return {
    type: GAME_FINISH
  }
}
