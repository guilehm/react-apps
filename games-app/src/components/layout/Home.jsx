import React from 'react'
import Search from './Search'
import VisibleGameList from '../../containers/VisibleGameList'

const Home = () => {
    return (
        <React.Fragment>
            <Search />
            <VisibleGameList />
        </React.Fragment>
    )
}

export default Home