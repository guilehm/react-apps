import React, { useState } from 'react'

import PlayerDetail from '../../components/Player'


const Home = () => {

    const [playerList, setPlayerList] = useState([])

    return (
        <div>
            <h1>Hello!</h1>
            <p>thanks for using our app</p>

            <input
                type="text"
                placeholder="Enter username..."
                autoFocus
            />
            {/* <PlayerDetail name='Guilehm91' platform='psn' /> */}
        </div>
    )
}


export default Home