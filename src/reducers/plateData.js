import { SET_PLATE_DATA } from '../actions/plates'

export default (state = null, action = {}) => {
  switch (action.type) {
  case SET_PLATE_DATA:
    return action.payload
  default:
    return state
  }
}