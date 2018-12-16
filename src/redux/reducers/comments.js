const STATE = {
  comments: []
}

const ACTION_HANDLERS = {
  
}

export default (state = STATE, action) => {
  const reducer = ACTION_HANDLERS[action.type];
  return reducer ? reducer(state, action) : state;
}