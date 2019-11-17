import { createSelector } from 'reselect'

const getGames = state => state.games

export const getVisibleGames = createSelector(
    getGames,
    games => games
)
