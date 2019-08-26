import { combineReducers } from '../tools'
import { dashboardReducer, homeReducer } from '../features'

const combinedReducers = combineReducers({
  dashboardReducer,
  homeReducer
})

export default combinedReducers;