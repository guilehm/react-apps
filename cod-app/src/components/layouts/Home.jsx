import React, { useState } from 'react'

import PlayerDetail from '../../components/Player'


const Home = () => {

    const [playerList, setPlayerList] = useState([])
    const [username, setUsername] = useState('')
    const [platform, setPlatform] = useState('psn')

    const handleSubmit = () => {
        if (!username) return
        setPlayerList([...playerList, {username, platform}])
        setUsername('')
    }

    return (
        <div>
            <h1>Hello!</h1>
            <p>thanks for using our app</p>

            <input
                value={username}
                name='username'
                type='text'
                placeholder='username...'
                autoFocus
                onChange={e => setUsername(e.target.value)}
            />
            <select
                name='platform'
                value={platform}
                onChange={e => setPlatform(e.target.value)}>
                <option value='psn'>psn</option>
                <option value='pc'>pc</option>
                <option value='battlenet'>battlenet</option>
                <option value='xbl'>xbl</option>
                <option value='atvi'>activision</option>
            </select>
            <button
                name='save'
                onClick={() => handleSubmit()}>
                    save
            </button>

            <ul>
                {playerList.map(player => (
                    <PlayerDetail
                        key={player.username}
                        name={player.username}
                        platform={player.platform} />
                ))}
            </ul>
        </div>
    )
}


export default Home