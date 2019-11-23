import { createSelector } from 'reselect'


const getGames = state => state.games
export const getGameList = createSelector(
    getGames,
    games => games
)

const getLoading = state => state.layout.loading
export const getLoadingStatus = createSelector(
    getLoading,
    loading => loading
)

const getError = state => state.layout.error
export const getErrorStatus = createSelector(
    getError,
    error => error
)