import * as types from '../constants/ActionTypes'
import CodApi from '../services/api-service'

const Api = new CodApi()


export const setLoading = () => ({ type: types.SET_LOADING })
export const unsetLoading = () => ({ type: types.SET_LOADING })

export const fetchPlayer = player => {
    return dispatch => {
        Api.getProfileData(player.username, player.platform)
            .then(res => dispatch({
                type: types.FETCH_PLAYER,
                payload: res.data,
            }))
            .catch(err => dispatch({
                type: types.SET_ERROR,
                payload: err.message,
            }))
    }
}

export const updateList = ({ players }) => {
    const requestData = players.map(p => ({
        username: p.platformInfo.platformUserHandle,
        platform: p.platformInfo.platformSlug,
    }))
    const promises = requestData.map(r =>
        Api.getProfileData(r.username, r.platform))

    return dispatch => {
        Promise.all(promises)
            .then(res => dispatch({
                type: types.UPDATE_PLAYER_STATS,
                payload: res.map(v => v.data.data),
            }))
    }
}

export const clearList = () => {
    return dispatch => dispatch({
        type: types.CLEAR_PLAYER_STATS,
    })
}