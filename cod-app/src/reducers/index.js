import players from './players'
import layout from './layout'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    players,
    layout,
})


export default rootReducer