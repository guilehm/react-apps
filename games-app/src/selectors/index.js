import { createSelector } from 'reselect'

const getGames = state => state.games

export const getGameList = createSelector(
    getGames,
    games => games
)
