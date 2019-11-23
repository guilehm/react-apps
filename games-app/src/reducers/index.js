import { combineReducers } from 'redux'
import games from './games'
import layout from './layout'
import searchItems from './search-items'


const rootReducer = combineReducers({
    games,
    layout,
    searchItems,
})

export default rootReducer
