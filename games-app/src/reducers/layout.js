import {
    SET_LOADING,
    UNSET_LOADING,
    SET_ERROR,
} from '../constants/ActionTypes'


export default function layout(state = null, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: true }
        case UNSET_LOADING:
            return { ...state, loading: false }
        case SET_ERROR:
            return { ...state, error: true }
        default:
            return {
                loading: null,
                error: null,
            }
    }
}
