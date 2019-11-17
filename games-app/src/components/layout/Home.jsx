import React from 'react'
import Search from './Search'
import GameList from '../GameList'


const Home = () => {
    return (
        <React.Fragment>
            <Search />
            <GameList />
        </React.Fragment>
    )
}

export default Home