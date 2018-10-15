import { combineReducers } from 'redux'

import hand from './hand'
import board from './board'
import game from './game'

const rootReducer = combineReducers({
  hand,
  board,
  game
})

export default rootReducer
