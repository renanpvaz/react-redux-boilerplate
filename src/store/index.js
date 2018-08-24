import { combineReducers } from 'redux'
import uiReducer from './ui'

export default combineReducers({
  ui: uiReducer
})
