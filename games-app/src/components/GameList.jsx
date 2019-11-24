import React from 'react'

import { VisibleGameItem as Game } from '../containers/GameItem.container'


const GameList = ({ games }) => {
    return (
        <ul>
            {games.map(game =>
                <li><Game {...game} /></li>
            )}
        </ul>
    )
}

export default GameList