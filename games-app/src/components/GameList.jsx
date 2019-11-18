import React from 'react'

import Game from './GameItem'


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