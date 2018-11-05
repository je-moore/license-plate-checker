import { SET_PLATE } from '../actions/plates'

export default (state = null, action = {}) => {
  switch (action.type) {
  case SET_PLATE:
    return action.payload
  default:
    return state
  }
}