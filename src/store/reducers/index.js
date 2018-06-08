import { combineReducers } from 'redux'

import heroes from './heroes'
import list from './list'

export default combineReducers({
  heroes,
  list,
})
