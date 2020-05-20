import {
    SET_LOADING,
    UNSET_LOADING,
    SET_ERROR,
} from '../constants/ActionTypes'

const INITIAL_STATE = {
    loading: null,
    error: null,
}

export default function layout(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: true }
        case UNSET_LOADING:
            return { ...state, loading: false }
        case SET_ERROR:
            return { ...state, loading: false, error: true }
        default:
            return {
                ...state,
                loading: null,
                error: null,
            }
    }
}
