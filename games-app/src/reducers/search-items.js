import {
    ADD_SEARCH_ITEMS,
    CLEAR_SEARCH_ITEMS,
} from '../constants/ActionTypes'


export default function searchItems(state = [], action) {
    switch (action.type) {
        case ADD_SEARCH_ITEMS:
            return [...action.payload]
        case CLEAR_SEARCH_ITEMS:
            return []
        default:
            return state
    }
}
