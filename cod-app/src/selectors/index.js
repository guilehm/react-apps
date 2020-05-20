import { createSelector } from 'reselect'

const getPlayers = state => state.players
export const getPlayerList = createSelector(
    getPlayers,
    players => players
)

const getError = state => state.layout.error
export const getErrorStatus = createSelector(
    getError,
    error => error
)
