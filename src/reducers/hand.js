export const HAND_PICK = 'HAND_PICK'
export const HAND_FLUSH = 'HAND_FLUSH'

const defaultState = []

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case HAND_PICK:
      return state.concat(payload.id)

    case HAND_FLUSH:
      return []

    default:
      return state
  }
}
