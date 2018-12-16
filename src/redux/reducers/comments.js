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
    const { rootId, userName, comment, parentId } = action.payload

    if(rootId === null) { // first level comments
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
    } else if(parentId === null) { // second level comments
      return {
        ...state,
        comments: {
          ...state.comments,
          [rootId]: {
            ...state.comments[rootId],
            children: [
              ...state.comments[rootId].children,
              {
                id: state.lastId,
                user: userName,
                dateCreated: new Date(),
                refComment: rootId,
                comment: comment,
                children: []
              }
            ]
          }
        },
        lastId: state.lastId + 1
      }
    } else { // third level comments
      const newChildren = state.comments[rootId].children.map(child => {
        if(child.id === parentId) {
          child.children = [
            ...child.children,
            {
              id: state.lastId,
              user: userName,
              dateCreated: new Date(),
              refComment: parentId,
              comment: comment
            }
          ]
        }
        return child
      })
      return {
        ...state,
        comments: {
          ...state.comments,
          [rootId]: {
            ...state.comments[rootId],
            children: newChildren
          }
        },
        lastId: state.lastId + 1
      }
    }
    
  }
}

export default (state = STATE, action) => {
  const reducer = ACTION_HANDLERS[action.type];
  return reducer ? reducer(state, action) : state;
}