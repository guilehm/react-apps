import * as types from '../constants/ActionTypes'
import CodApi from '../services/api-service'

const Api = new CodApi()

export const fetchPlayer = player => {
    return dispatch => {
        Api.getProfileData(player.username, player.platform)
            .then(res => dispatch({
                type: types.FETCH_PLAYER,
                payload: res.data,
            }))
    }
}