import {
    ADD_GAME,
} from '../constants/ActionTypes'



export default function games(state = [], action) {
    switch (action.type) {
        case ADD_GAME:
            return [...state, { ...action.payload }]
        default:
            return state
    }
}
