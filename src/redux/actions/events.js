export const OPEN_ADD_COMMENT = 'OPEN_ADD_COMMENT';
export const CLOSE_ADD_COMMENT = 'CLOSE_ADD_COMMENT';
export const OPEN_SECOND_LEVEL_COMMENT = 'OPEN_SECOND_LEVEL_COMMENT';
export const OPEN_THIRD_LEVEL_COMMENT = 'OPEN_THIRD_LEVEL_COMMENT';
export const HANDLE_TEXTFIELD_CHANGE = 'HANDLE_TEXTFIELD_CHANGE';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export const addComment = () => ({
  type: OPEN_ADD_COMMENT
})
export const closeAddComment = () => ({
  type: CLOSE_ADD_COMMENT
})
export const addSecondLevelComment = (parentId) => ({
  type: OPEN_SECOND_LEVEL_COMMENT,
  payload: parentId
})
export const addThirdLevelComment = (rootId, parentId) => ({
  type: OPEN_THIRD_LEVEL_COMMENT,
  payload: {
    rootId, parentId
  }
})
export const handleTextFieldChange = (type, value) => ({
  type: HANDLE_TEXTFIELD_CHANGE,
  payload: {
    type, value
  }
})
export const handleSubmit = (validatedComment) => (dispatch, getState) => {
  const state = getState().eventsStore
  const { userName, rootId, parentId } = state
  return dispatch({
    type: HANDLE_SUBMIT,
    payload: {
      comment: validatedComment, 
      userName,
      rootId,
      parentId
    }
  })

} 