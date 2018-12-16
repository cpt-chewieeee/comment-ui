import {
  OPEN_ADD_COMMENT,
  CLOSE_ADD_COMMENT,
  OPEN_SECOND_LEVEL_COMMENT,
  OPEN_THIRD_LEVEL_COMMENT
} from '../actions/events'
const STATE = {
  openAddComment: false,
  rootId: null,
  parentId: null
}

const ACTION_HANDLERS = {
  [OPEN_ADD_COMMENT]: (state, action) => {
    return {
      ...state,
      openAddComment: true
    }
  },
  [OPEN_THIRD_LEVEL_COMMENT]: (state, action) => {
    console.log('3rd', action.payload)

    return {
      ...state,
      rootId: action.payload.rootId,
      parentId: action.payload.parentId,
      openAddComment: true
    }
  },
  [OPEN_SECOND_LEVEL_COMMENT]: (state, action) => {
    console.log('2nd', action.payload)
    return {
      ...state,
      parentId: null,
      rootId: action.payload,
      openAddComment: true
    }
  },
  [CLOSE_ADD_COMMENT]: (state, action) => { // reset everything
    return {
      ...STATE
    }
  }
}

export default (state = STATE, action) => {
  const reducer = ACTION_HANDLERS[action.type];
  return reducer ? reducer(state, action) : state;
}