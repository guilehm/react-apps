import React, { useState, useEffect } from 'react'
import Chart from './Chart'


const ChartGroup = props => {


    const [playerList, setPlayerList] = useState([])
    const [username, setUsername] = useState('')
    const [platform, setPlatform] = useState('psn')

    const handleSubmit = () => {
        if (!username) return
        setPlayerList([...playerList, { username, platform }])
        setUsername('')
    }


    return (
        <React.Fragment>
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

            <div
                id={`chartdiv`}
                style={{ width: '100%', height: '500px' }}>
            </div>
            {
                playerList.length > 0 ?
                <Chart playerList={playerList} />
                : ''
            }

        </React.Fragment>
    )
}

export default ChartGroup
