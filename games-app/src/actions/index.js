import * as types from '../constants/ActionTypes'


export const addGame = game => ({ type: types.ADD_GAME, game })
export const populateGame = (game, data) => ({ type: types.POPULATE_GAME, game, data })
