import {
    ADD_GAME,
    DELETE_GAME,
} from '../constants/ActionTypes'



export default function games(state = [], action) {
    switch (action.type) {
        case ADD_GAME:
            return [...state, { ...action.payload }]
        case DELETE_GAME:
            return state.filter(game => game.id !== action.id)
        default:
            return state
    }
}
