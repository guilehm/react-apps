import React, { useState } from 'react'


const Inputs = ({ error, actions }) => {

    const [username, setUsername] = useState('')
    const [platform, setPlatform] = useState('psn')

    const handleSubmit = () => {
        if (!username) return
        setUsername('')
        actions.fetchPlayer({ username, platform })
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
                onClick={handleSubmit}>
                save
            </button>
        </React.Fragment>
    )
}

export default Inputs