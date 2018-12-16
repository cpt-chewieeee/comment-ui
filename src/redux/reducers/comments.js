import { 
  GET_ALL_COMMENTS_SUCCESS 
} from '../actions/comments'
import {
  HANDLE_SUBMIT
} from '../actions/events'
const STATE = {
  comments: {},
  lastId: 13 // temp counter. in reality, this id should be send from the server as a response
}

const ACTION_HANDLERS = {
  [GET_ALL_COMMENTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      comments: action.payload
    }
  },
  [HANDLE_SUBMIT]: (state, action) => {

    console.log(state, '====>', action.payload)
    const { rootId, userName, comment } = action.payload


    if(rootId === null) {

      return {
        ...state,
        comments: {
          ...state.comments,
          [state.lastId]: {
            id: state.lastId,
            user: userName,
            dateCreated: new Date(),
            refComment: null,
            comment: comment,
            children: []
          }
        },
        lastId: state.lastId + 1
      }
    }
    return {
      ...state
    }
  }
}

export default (state = STATE, action) => {
  const reducer = ACTION_HANDLERS[action.type];
  return reducer ? reducer(state, action) : state;
}