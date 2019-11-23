import React from 'react'
import Search from '../../containers/Search.container'
import VisibleGameList from '../../containers/GameList.container'
import SearchList from '../../containers/SearchList.container'

const Home = () => {
    return (
        <React.Fragment>
            <Search />
            <SearchList />
            <VisibleGameList />
        </React.Fragment>
    )
}

export default Home