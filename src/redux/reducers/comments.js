import { 
  GET_ALL_COMMENTS_SUCCESS 
} from '../actions/comments'
const STATE = {
  // originalComments: []
  comments: [],
  // firstLevel: 
}

const ACTION_HANDLERS = {
  [GET_ALL_COMMENTS_SUCCESS]: (state, action) => {
    console.log('====>', action.payload)
    return {
      ...state,
      // originalComments: action.payload.original
    }
  }
}

export default (state = STATE, action) => {
  const reducer = ACTION_HANDLERS[action.type];
  return reducer ? reducer(state, action) : state;
}