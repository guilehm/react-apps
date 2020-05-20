import {
    FETCH_PLAYER,
    UPDATE_PLAYER_STATS,
    CLEAR_PLAYER_STATS,
} from '../constants/ActionTypes'

const emptyState = []
const players = (state = emptyState, action) => {
    switch (action.type) {
        case FETCH_PLAYER:
            return [...state, { ...action.payload.data }]
        case UPDATE_PLAYER_STATS:
            return action.payload
        case CLEAR_PLAYER_STATS:
            return emptyState
        default:
            return state
    }
}


export default players