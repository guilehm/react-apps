import {
    SET_LOADING,
    UNSET_LOADING,
} from '../constants/ActionTypes'


export default function layout(state = null, action) {
    switch (action.type) {
        case SET_LOADING:
            return { loading: true }
        case UNSET_LOADING:
            return { loading: false }
        default:
            return { loading: null }
    }
}
