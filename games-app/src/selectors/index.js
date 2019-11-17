import { createSelector } from 'reselect'
import { SHOW_ALL } from '../constants/GameFilter'


const getGames = state => state.games

export const getVisibleGames = createSelector(
    getGames,
    (visibilityFilter, games) => {
        switch (visibilityFilter) {
            case SHOW_ALL:
                return games
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
)
