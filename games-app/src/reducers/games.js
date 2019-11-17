import {
    POPULATE_GAME,
} from '../constants/ActionTypes'

const initialState = [{ name: 'GTA' }]

export default function games(state = initialState, action) {
    switch (action.type) {
        case POPULATE_GAME:
            return [{ name: action.name }]
        default:
            return state
    }
}
