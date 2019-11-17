import React from 'react'

import Game from './GameItem'


const GameList = ({ filteredGames, actions }) => {
    return (
        <ul>
            {filteredGames.map(game =>
                <li><Game name={game.name} /></li>
            )}
        </ul>
    )
}

export default GameList