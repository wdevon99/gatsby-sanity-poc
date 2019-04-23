import { createStore as reduxCreateStore, combineReducers } from "redux"
import user from './user'

const reducers = combineReducers({
    user,
  })

const createStore = () => reduxCreateStore(reducers)
export default createStore