import React from 'react'

import { VisibleGameItem as Game } from '../containers/GameItem.container'


const GameList = ({ games, actions }) => {
    return (
        <ul>
            {games.map(game =>
                <li><Game name={game.name} /></li>
            )}
        </ul>
    )
}

export default GameList