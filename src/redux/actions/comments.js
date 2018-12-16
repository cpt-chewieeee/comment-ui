export const GET_ALL_COMMENTS_SUCCESS = 'GET_ALL_COMMENTS_SUCCESS'

export const fetchAllComments = () => {
  return {
    type: GET_ALL_COMMENTS_SUCCESS,
    payload: []
  }
}