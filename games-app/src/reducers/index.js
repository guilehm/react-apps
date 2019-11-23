import { combineReducers } from 'redux'
import games from './games'
import layout from './layout'


const rootReducer = combineReducers({
    games,
    layout,
})

export default rootReducer
