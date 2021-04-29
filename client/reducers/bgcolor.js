import { CHANGE_COLOR } from '../actions'

const initialState = '#89C7CD'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return action.color
    default:
      return state
  }
}

export default reducer
