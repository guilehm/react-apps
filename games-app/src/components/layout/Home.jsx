import React from 'react'
import Search from '../../containers/Search.container'
import VisibleGameList from '../../containers/GameList.container'

const Home = () => {
    return (
        <React.Fragment>
            <Search />
            <VisibleGameList />
        </React.Fragment>
    )
}

export default Home