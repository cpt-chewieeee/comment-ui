import MockData from '../mockData'
import { parseComments } from '../helper'
export const GET_ALL_COMMENTS_SUCCESS = 'GET_ALL_COMMENTS_SUCCESS'

export const fetchAllComments = () => async dispatch =>{
  const data = await parseComments(MockData)

  // console.log('wtf is this===>', data)
  return dispatch({
    type: GET_ALL_COMMENTS_SUCCESS,
    // payload: {
      // firstLevel: parseFirstLevelComments(MockData),
      // original: MockData,
    // }
    payload: data
  })
}