export const OPEN_ADD_COMMENT = 'OPEN_ADD_COMMENT';
export const CLOSE_ADD_COMMENT = 'CLOSE_ADD_COMMENT';
export const OPEN_SECOND_LEVEL_COMMENT = 'OPEN_SECOND_LEVEL_COMMENT';
export const OPEN_THIRD_LEVEL_COMMENT = 'OPEN_THIRD_LEVEL_COMMENT';

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