import * as types from '../constants/ActionTypes'
import Rawg from '../services/api'


const API = new Rawg()

export const addGame = game => {
    return dispatch => {
        API.searchByName(game.name)
            .then(res => dispatch({
                type: types.ADD_GAME,
                payload: res.data.results[0]
            }))
    }
}