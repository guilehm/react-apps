import {
    FETCH_PLAYER,
    UPDATE_PLAYER_STATS,
} from '../constants/ActionTypes'

const players = (state = [], action) => {
    switch (action.type) {
        case FETCH_PLAYER:
            return [...state, { ...action.payload.data }]
        case UPDATE_PLAYER_STATS:
            return action.payload
        default:
            return state
    }
}


export default players