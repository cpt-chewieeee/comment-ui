import { combineReducers } from 'redux'
import commentsStore from './comments'
import eventsStore from './events'

export default combineReducers({
  commentsStore,
  eventsStore
})