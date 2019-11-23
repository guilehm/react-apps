import {
    ADD_GAME,
} from '../constants/ActionTypes'

const initialState = [{ name: 'GTA' }]

export default function games(state = initialState, action) {
    switch (action.type) {
        case ADD_GAME:
            return [...state, { name: action.payload.name }]
        default:
            return state
    }
}
