import { FETCH_PLAYER } from '../constants/ActionTypes'

const players = (state = [], action) => {
    switch (action.type) {
        case FETCH_PLAYER:
            return [...state, { ...action.payload }]
        default:
            return state
    }
}


export default players