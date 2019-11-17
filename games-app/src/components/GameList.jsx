import React from 'react'


const GameList = ({ filteredGames = [], actions }) => {
    return (
        <ul>
            {filteredGames.map(game =>
                <li>{game}</li>
            )}
        </ul>
    )
}

export default GameList