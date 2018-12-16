import { 
  GET_ALL_COMMENTS_SUCCESS 
} from '../actions/comments'
const STATE = {
  comments: {},

}

const ACTION_HANDLERS = {
  [GET_ALL_COMMENTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      comments: action.payload
    }
  }
}

export default (state = STATE, action) => {
  const reducer = ACTION_HANDLERS[action.type];
  return reducer ? reducer(state, action) : state;
}