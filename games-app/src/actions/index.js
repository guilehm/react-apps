import * as types from '../constants/ActionTypes'
import Rawg from '../services/api'


const API = new Rawg()

export const setLoading = () => ({ type: types.SET_LOADING })
export const unsetLoading = () => ({ type: types.SET_LOADING })

export const deleteGame = id => ({ type: types.DELETE_GAME, id })

export const addGame = game => {
    let handleSuccess = res => {
        let id = res.data.results[0].id
        return API.getGameData(id)
    }

    return dispatch => {
        API.searchByName(game.name)
            .then(handleSuccess)
            .then(res => dispatch({
                type: types.ADD_GAME,
                payload: res.data
            }))
            .catch(err => dispatch({
                type: types.SET_ERROR
            }))
    }
}