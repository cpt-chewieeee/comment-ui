import {
  OPEN_ADD_COMMENT,
  CLOSE_ADD_COMMENT
} from '../actions/events'
const STATE = {
  openAddComment: false
}

const ACTION_HANDLERS = {
  [OPEN_ADD_COMMENT]: (state, action) => {
    return {
      ...state,
      openAddComment: true
    }
  },
  [CLOSE_ADD_COMMENT]: (state, action) => {
    return {
      ...state,
      openAddComment: false
    }
  }
}

export default (state = STATE, action) => {
  const reducer = ACTION_HANDLERS[action.type];
  return reducer ? reducer(state, action) : state;
}