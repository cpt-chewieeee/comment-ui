import MockData from '../mockData'
import { parseComments } from '../helper'
export const GET_ALL_COMMENTS_SUCCESS = 'GET_ALL_COMMENTS_SUCCESS'

export const fetchAllComments = () => async dispatch =>{
  const data = await parseComments(MockData)
  
  return dispatch({
    type: GET_ALL_COMMENTS_SUCCESS,
    payload: data
  })
}